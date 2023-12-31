import { Injectable, OnDestroy, Type } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DynamicDialogService implements OnDestroy {
  //#region Declerations
  // Ref for opened dialog
  private __ref!: DynamicDialogRef;
  // Used for holding data passed to dialog window
  private __config: BehaviorSubject<DynamicDialogConfig> =
    new BehaviorSubject<DynamicDialogConfig>({});
  //#endregion Declerations

  constructor(private __dialogService: DialogService) {}

  //#region Methods
  /**
   * Opens a dialog window with passed component
   * @param component component to be displayed in dialog box
   * @param maximizable shows/hides maximize icon
   * @param header sets header string
   * @param styleClass external styleclass for dialog box
   * @param dismissableMask enables closing popup when click outside
   */
  showDialog(
    component: Type<any>,
    data?: any,
    maximizable: boolean = false,
    header?: string,
    styleClass?: string,
    dismissableMask: boolean = true
  ): void {
    this.__config.next({ ...this.__config, data });
    this.__ref = this.__dialogService.open(component, {
      header: header,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: maximizable,
      styleClass: styleClass!,
      data: data,
      dismissableMask: dismissableMask,
    });
  }
  /**
   * Returns data passed to dialog window
   */
  getData(): any {
    return this.__config.value.data;
  }
  /**
   * Close currently open dialog
   */
  closeDialog(): void {
    if (this.__ref) {
      this.__ref.close();
    }
  }
  /**
   * Subscription to closed dialogs
   */
  onDialogClose(): Observable<any> {
    return this.__ref.onClose;
  }
  //#endregion Methods

  //#region LifeCycle Hooks
  ngOnDestroy(): void {
    if (this.__ref) {
      this.__ref.close();
    }
  }
  //#endregion LifeCycle Hooks
}
