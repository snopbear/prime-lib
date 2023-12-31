import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StateService } from '../state/state.service';
import { State, AccessLayerConfig } from './interfaces/models';
import { HTTPCallsService } from '../http-calls/http-calls.service';
import { RequestType } from 'assaf-prime-lib/models';

//Resources:
// - https://medium.com/impact-developers/how-to-destroy-observables-in-angular-313dec343b45
@Injectable({
  providedIn: 'any',
})
export class AccessLayerService<T>
  extends StateService<State<T>>
  implements OnDestroy
{
  //#region Declerations
  // Initial value for state
  private __initialState: State<T> = {
    data: [],
    selectedId: 0,
  };
  // Controls terminating all opened subscriptions on destroy
  private __unsubscriber: Subject<void> = new Subject();
  // Object holding request urls
  private __configuration!: AccessLayerConfig;
  /**
   * Observable to access state data
   */
  dataObservable$: Observable<T[]> = this.select((state) => state.data);
  //#endregion Declerations

  constructor(private __apiService: HTTPCallsService) {
    super();
  }

  //#region Methods
  /**
   * Initializes service with urls
   * @param config Object containing urls for requests
   */
  initService(config: AccessLayerConfig): void {
    this.__configuration = config;
    this.initState(this.__initialState);
  }
  /**
   * Loads all data on GET url
   */
  load(method: RequestType = 'GET'): Observable<any> {
    return this.__apiService
      .consumingAPI(this.__configuration.get!, method)
      .pipe(
        takeUntil(this.__unsubscriber),
        tap((data: any) => this.setState({ data }))
      );
  }
  /**
   * Fills state array with data externally
   * @param data data to be filled in state
   */
  fillState(data: T[]): void {
    this.setState({ data });
  }
  /**
   * Creates new object on POST url
   * @param newData Value to be posted
   */
  create(newData: T, method: RequestType = 'POST'): Observable<any> {
    return this.__apiService
      .consumingAPI(this.__configuration.post!, method, newData)
      .pipe(
        takeUntil(this.__unsubscriber),
        tap((newTodo: any) => {
          this.setState({
            data: [...this.state.data, newTodo],
            selectedId: newTodo.id,
          });
        })
      );
  }
  /**
   * Updates object on PUT url
   * @param newData Value to be posted
   */
  update(newData: T, method: RequestType = 'PUT'): Observable<any> {
    return this.__apiService
      .consumingAPI(
        `${this.__configuration.put!}/${
          (newData as any)[this.__configuration.idDataKey]
        }`,
        method,
        newData
      )
      .pipe(
        takeUntil(this.__unsubscriber),
        tap((updatedTodo) => {
          this.setState({
            data: this.state.data.map((item: any) =>
              item[this.__configuration.idDataKey] ===
              (newData as any)[this.__configuration.idDataKey]
                ? newData
                : item
            ),
          });
        })
      );
  }
  /**
   * Deletes object on DELETE url
   * @param dataToDelete Value to be deleted
   */
  delete(dataToDelete: T, method: RequestType = 'DELETE'): Observable<any> {
    return this.__apiService
      .consumingAPI(
        `${this.__configuration.delete!}/${
          (dataToDelete as any)[this.__configuration.idDataKey]
        }`,
        method
      )
      .pipe(
        takeUntil(this.__unsubscriber),
        tap(() => {
          this.setState({
            selectedId: undefined,
            data: this.state.data.filter(
              (item: any) =>
                item[this.__configuration.idDataKey] !==
                (dataToDelete as any)[this.__configuration.idDataKey]
            ),
          });
        })
      );
  }
  /**
   * Checks wether service is initiated or not
   * @returns Wether service is initiated or not
   */
  isInitated(): boolean {
    return !!this.__configuration?.idDataKey;
  }
  //#endregion Methods

  //#region LifeCycle Hooks
  ngOnDestroy(): void {
    this.__unsubscriber.next();
    this.__unsubscriber.complete();
    this.__unsubscriber.unsubscribe();
  }
  //#endregion LifeCycle Hooks
}
