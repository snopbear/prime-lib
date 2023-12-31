import { Component, HostListener, Input, OnInit } from '@angular/core';
import { GenericBreakPoint, ToastPosition } from '../models/toast-model';
import { BehaviorSubject } from 'rxjs';
import { DisplayService } from 'assaf-prime-lib/services';


@Component({
  selector: 'assaf-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class AssafToastComponent implements OnInit {
  //#region Declerations
  /**
   * Key identifier for the toast instance
   * @type string
   */
  @Input() key!: string;
  /**
   * Sets toast position
   * @type ToastPosition
   * @default 'top-right'
   */
  @Input() position: ToastPosition = 'top-right';
  /**
   * External style class
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets z-index of active toast
   * @type number
   * @default 1
   */
  @Input() zIndex: number = 1;
  /**
   * Enables showing toast as a snack bar shape based on entered breakpoint
   * @type boolean
   * @default true
   */
  @Input() isResponsive: boolean = true;
  /**
   * Max width breakpoint to show toast as a snack bar
   * @type number
   * @default 768
   */
  @Input() breakpoint: number = 768;

  /* Internal component variables */
  // Sets object in the form that adjusts toast width
  _activeBreakpoint: GenericBreakPoint = {};
  // Sets/updates current screen width
  _isMobile: BehaviorSubject<number> = new BehaviorSubject(window?.innerWidth);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile.next(event.target?.innerWidth);
    this.setIsMobile();
  }
  //#endregion Declerations

  constructor(private __display: DisplayService) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    const breakpointStyle = this.breakpoint + 'px';
    this._activeBreakpoint[breakpointStyle] = { width: '60%' };
    this.setIsMobile();
  }
  //#endregion Life Cycle Hooks

  //#region Methods
  setIsMobile(): void {
    this.__display.isMobile.next(
      this.isResponsive ? this._isMobile.value > this.breakpoint : null
    );
  }
  //#endregion Methods
}
