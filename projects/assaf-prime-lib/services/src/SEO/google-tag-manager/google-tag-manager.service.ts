import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleTagManagerService {
  private _window: any;

  constructor() {
    this._window = window;
  }
  //list of all our dataLayer methods you will use
  logPageView(obj: any): void {
    //you can add any attributes you want to send it

    this.executeHit(obj);
  }
  logEvent(obj: any): void {
    //you can add any attributes

    this.executeHit(obj);
  }
  private executeHit(obj: any) {
    if (obj) this._window.dataLayer?.push(obj);
  }
}
