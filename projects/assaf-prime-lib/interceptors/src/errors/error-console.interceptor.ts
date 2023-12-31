import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorConsoleInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log('Error Event');
          } else {
            debugger;
            switch (error.status) {
              case 401: // Unautorized
                console.log(`${error.statusText}`, 'Authorization Error');
                break;
              case 403: // Forbidden
                console.log(`${error.statusText}`, 'Access Error');
                break;
              case 404: // Not found
                console.log(`${error.statusText}`, 'Invalid URL');
                break;
              case 500:
              case 503: // Server error
                console.log(`${error.statusText}`, 'Server Error');
                break;
            }
          }
        } else {
          console.log('An error occurred');
        }
        return throwError(() => new Error(error.statusText));
      })
    );
  }
}
