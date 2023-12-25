import { Component, Input } from '@angular/core';

import {
  ButtonIconPosition,
  ButtonType,
  ButtonMode,
} from '../models/button-model';
import { Severity, Size } from '@assaf/assaf-prime-lib/models';


@Component({
  selector: 'assaf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class AssafButtonComponent {
  //#region Declerations
  /**
   * Enables/disables button
   * @type boolean
   * @default false
   */
  @Input() disabled: boolean = false;
  /**
   * Sets button color based on imported theme file in project
   * @type Severity
   * @default 'info'
   */
  @Input() severity: Severity = 'info';
  /**
   * Sets button shape to anchor shape
   * @type boolean
   * @default false
   */
  @Input() isLink: boolean = false;
  /**
   * Sets button shape to raised
   * @type boolean
   * @default false
   */
  @Input() isRaised: boolean = false;
  /**
   * Sets button shape to rounded
   * @type boolean
   * @default false
   */
  @Input() isRounded: boolean = false;
  /**
   * Sets button shape to text
   * @type boolean
   * @default false
   */
  @Input() isText: boolean = false;
  /**
   * Sets button shape to outline
   * @type boolean
   * @default false
   */
  @Input() isOutline: boolean = false;
  /**
   * Sets button text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets button icon
   * @type string
   */
  @Input() btnIcon!: string;
  /**
   * Sets button type (for forms use submit type)
   * @type ButtonType
   * @default 'button'
   */
  @Input() btnType: ButtonType = 'button';
  /**
   * Sets button size (for normal size don't set attribute)
   * @type Size
   */
  @Input() size!: Size;
  /**
   * Sets button viewing mode
   * @type ButtonMode
   */
  @Input() mode!: ButtonMode;
  /**
   * Sets badge value (works with badge button mode only)
   * @type string
   * @default '0'
   */
  @Input() badgeValue: string = '0';
  /**
   * Sets bagde color (works with badge button mode only)
   * @type Severity
   * @default 'info'
   */
  @Input() badgeSeverity: Severity = 'info';
  /**
   * Sets icon position (works only if icon is provided)
   * @type ButtonIconPosition
   * @default 'left'
   */
  @Input() iconPos: ButtonIconPosition = 'left';
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  //#endregion Declerations
}
