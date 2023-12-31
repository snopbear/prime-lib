import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestType } from 'assaf-prime-lib/models';
import { Observable } from 'rxjs';

/* Why  Partial */
// The create() method accepts a partial model as an argument and returns the created model from the server.
// We say "partial" because before we create the resource, some properties are not available (e.g. id, createdAt, etc).
// Also, it converts the result to an instance of the model's class.
@Injectable({
  providedIn: 'root',
})
export class HTTPCallsService {
  constructor(private __http: HttpClient) {}

  /**
   * Sends request based on requestType
   * @param url url for sending request
   * @param requestType sets request type based on REST modes
   * @param data data to be sent in body
   * @param optionsObserveResponse to be sent in header Observe different types of response in HttpClient a
   * @returns Observable based on requestType
   */
  consumingAPI<T>(
    url: string,
    requestType: RequestType,
    data?: any,
    optionsObserveResponse?: {}
  ): Observable<Partial<HttpResponse<T>> | Partial<HttpEvent<T>> | Partial<T>> {
    switch (requestType) {
      case 'GET':
        return this.__http.get<T>(url, optionsObserveResponse);
      case 'POST':
        return this.__http.post<T>(url, data, optionsObserveResponse);
      case 'PUT':
        return this.__http.put<T>(url, data, optionsObserveResponse);
      case 'DELETE':
        return this.__http.delete<T>(url, optionsObserveResponse);
    }
  }
}
