import { Injectable } from '@angular/core';
import { MessageSeverity } from 'assaf-prime-lib/models';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  //#region Declerations
  /**
   * Behaviour used only if toast is set to responsive mode
   */
  isMobile: BehaviorSubject<boolean | null> = new BehaviorSubject(
    null as boolean | null
  );

  constructor(private __message: MessageService) {}

  //#region Methods
  /**
   * Shows toast with entered summary & description
   * @param severity sets toast color & icon
   * @param summary sets toast tile
   * @param description sets toast subtitle message
   * @param key unique identifier to target a specific toast (if not provided will display on first one)
   */
  displayToast(
    severity: MessageSeverity,
    summary: string,
    description?: string,
    key?: string,
    closable?: boolean
  ): void {
    this.__message.add({
      summary,
      detail: description!,
      severity,
      key: key!,
      closable: this.isMobile.value !== null ? this.isMobile.value! : closable,
    });
  }
  /**
   * Shows message with entered summary & description
   * @param severity sets message color & icon
   * @param summary sets message tile
   * @param key unique identifier to target a specific message
   * @param description sets message subtitle message
   */
  displayMessage(
    severity: MessageSeverity,
    summary: string,
    key: string,
    description?: string
  ): void {
    this.__message.add({
      summary,
      detail: description!,
      severity,
      key: key,
    });
  }
  //#endregion Methods
}
