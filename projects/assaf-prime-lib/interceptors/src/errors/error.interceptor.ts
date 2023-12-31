import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { DisplayService } from 'assaf-prime-lib/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private __displayService: DisplayService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modalStateErrors.push(error.error.errors[key]);
                  }
                }
                throw modalStateErrors.flat();
              } else if (typeof error.error === 'object') {
                this.__displayService.displayToast(
                  'error',
                  'Request error',
                  error.statusText + '___' + error.status
                );
              } else {
                this.__displayService.displayToast(
                  'error',
                  'Request error',
                  error.error + '___' + error.status
                );
              }
              break;
            case 401:
              this.__displayService.displayToast(
                'error',
                'Request error',
                error.statusText + '___' + error.status
              );
              break;
            case 404:
              this.__displayService.displayToast(
                'error',
                'Request error',
                error.statusText + '___' + error.status + '___' + 'not-found'
              );
              break;
            case 500:
            case 503:
              const navigationExtras: NavigationExtras = {
                state: { error: error.error },
              };
              this.__displayService.displayToast(
                'error',
                'Request error',
                error.statusText +
                  '___' +
                  error.status +
                  '___' +
                  navigationExtras
              );
              break;
            default:
              // console.log('Something unexpected went wrong');
              this.__displayService.displayToast(
                'error',
                'Request error',
                'Something unexpected went wrong'
              );
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
