import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'assaf-prime-lib/services';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderLanguageStorageInterceptor implements HttpInterceptor {
  constructor(private __localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const lang = this.__localStorageService.getItem('lang');
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {
        Language: `${lang}`,
      },
    });

    return next.handle(jsonReq);
  }
}
