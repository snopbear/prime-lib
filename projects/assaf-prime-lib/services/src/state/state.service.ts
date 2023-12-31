import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class StateService<T> {
  //#region Declerations
  // Internal behavior subject holding data
  private state$: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);
  /**
   * Gets current internal observable value
   */
  protected get state(): T {
    return this.state$.getValue();
  }
  //#endregion Declerations

  //#region Methods
  /**
   * Sets an inital value for observable
   * @param initialState value to set the observable with
   */
  protected initState(initialState: T): void {
    this.state$.next(initialState);
  }
  /**
   * Selects data from observable based on callback function
   * @param mapFn Callback function to be used in mapping internal observable data
   * @returns Observable with mapped data based on callback
   */
  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map((state: T) => mapFn(state)),
      distinctUntilChanged()
    );
  }
  /**
   * Updates internal observable with new partial/complete value
   * @param newState Value to be set/updated in internal observable
   */
  protected setState(newState: Partial<T>): void {
    this.state$.next({
      ...this.state,
      ...newState,
    });
  }
  //#endregion Methods
}
