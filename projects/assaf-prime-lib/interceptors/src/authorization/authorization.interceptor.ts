import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'assaf-prime-lib/services';

@Injectable()
export class HeaderAuthorizationInterceptor implements HttpInterceptor {
  constructor(private __localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.__localStorageService.getToken();
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next.handle(jsonReq);
  }
}
