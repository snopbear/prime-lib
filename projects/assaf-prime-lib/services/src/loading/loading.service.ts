import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  //#region Declerations
  private __busyRequestCount = 0;
  private __showLoader: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loaderStatus$: Observable<boolean | null> = this.__showLoader.asObservable();
  //#endregion Declerations

  //#regin Methods
  busy() {
    this.__busyRequestCount++;
    this.__showLoader.next(true);
  }

  idle() {
    this.__busyRequestCount--;
    if (this.__busyRequestCount <= 0) {
      this.__busyRequestCount = 0;
      this.__showLoader.next(false);
    }
  }
  //#endregion Methods
}
