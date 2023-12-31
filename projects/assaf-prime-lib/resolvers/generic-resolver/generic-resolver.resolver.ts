import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin, catchError, of } from 'rxjs';

// Resolver accepts two modes:
// - Multi request by passing an array to 'resolverData' key in data object of route
// - Single request by passing a direct object to 'resolverData'
// In case of multi request forkJoin is returned otherwise a single observable is returned
@Injectable({ providedIn: 'root' })
export class GenericResolver<T> implements Resolve<T> {
  constructor(private __httpClient: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return route.data['resolverData'] instanceof Array
      ? forkJoin([
          ...route.data?.['resolverData'].map((item: any) => {
            return this.generateObservable(item, route);
          }),
        ])
      : this.generateObservable(route.data['resolverData'], route);
  }

  generateObservable(item: any, route: any): Observable<any> {
    return this.__httpClient
      .request<any>(
        item.method,
        `${item.url}${
          route.params['id'] && item.getFromParams
            ? `/${route.params['id']}`
            : ''
        }`
      )
      .pipe(
        catchError((err) => {
          return of(err);
        })
      );
  }
}

// resolve(route: ActivatedRouteSnapshot): Observable<any> {
//   return forkJoin([...route.data?.['resolverData'].map((item:any)=>{
//     return this._httpClient.request<any>(item.method, `${item.url}${route.params['id'] && item.getFromParams?`/${route.params['id']}`:''}`).pipe(catchError((err)=>{
//       return of(err)
//     }))
//     })]);
//   }
