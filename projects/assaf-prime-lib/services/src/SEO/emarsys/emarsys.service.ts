import { Injectable } from '@angular/core';
import { EmarsysCommand } from './models';

declare let ScarabQueue: any;

@Injectable({
  providedIn: 'root',
})
export class EmarsysService {
  //#region Declerations
  private __loaded: boolean = false;
  private __emarsysUrl!: string;
  //#endregion Declerations

  //#region Methods
  private checkEmarsysUrl(url: string): void {
    if (!url) {
      throw new Error('Emarsys url must be provided to load script');
    }
  }
  /**
   * Loads emarsys script in html document
   * @param emarsysUrl url of script to be loaded
   * @param onload callback to be applied on script load
   */
  addEmarsysScript(
    emarsysUrl: string,
    onload?: (element?: HTMLScriptElement) => void
  ): void {
    this.checkEmarsysUrl(emarsysUrl);
    if (!document.getElementById('emarsys-script')) {
      const script = document.createElement('script');
      script.id = 'emarsys-script';
      script.src = emarsysUrl;
      script.defer = true;
      script.onload = (): void => {
        this.__loaded = true;
        ScarabQueue = [];
        onload && onload(script);
      };
      document.body.appendChild(script);
      this.__emarsysUrl = emarsysUrl;
    }
  }
  /**
   * Adds emarsys go command to ScarabQueue
   */
  go(): void {
    this.__loaded
      ? ScarabQueue.push(['go'])
      : this.addEmarsysScript(this.__emarsysUrl);
  }
  /**
   * Adds a new event to ScarabQueue when a certain action gets performed
   * @param event Event to be added to ScarabQueue
   * @see https://dev.emarsys.com/docs/web-extend/1bf36e101d6be-what-is-web-extend-data-collection
   */
  addEmarsysEvent(event: EmarsysCommand): void {
    this.__loaded
      ? ScarabQueue.push(event)
      : this.addEmarsysScript(this.__emarsysUrl);
  }
  //#endregion Methods
}
