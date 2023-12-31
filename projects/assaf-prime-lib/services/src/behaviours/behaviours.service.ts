import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehavioursService<T> implements OnDestroy {
  private __dataSource$: BehaviorSubject<T | null> =
    new BehaviorSubject<T | null>(null);
  /**
   * Observable to acces value of type T
   */
  public dataSource$: Observable<T | null> = this.__dataSource$.asObservable();

  /**
   * Updates observable with new value
   * @param newData new data value to update behaviour subject
   */
  setDataSource(newData: T): void {
    this.__dataSource$.next(newData);
  }
  // Destroys subscription on service destroy
  ngOnDestroy(): void {
    this.__dataSource$.unsubscribe();
  }
}
