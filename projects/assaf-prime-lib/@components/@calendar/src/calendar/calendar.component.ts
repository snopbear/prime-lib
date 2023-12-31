import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import { HourFormat, CalendarMode } from '../models/calendar-model';
import { FormInputErrorModes, FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class AssafCalendarComponent implements OnInit {
  //#region Declerations
  /**
   * Sets input placeholder text
   * @type string
   * @default 'Pick Date'
   */
  @Input() placeholder: string = 'Pick Date';
  /**
   * Sets input label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets calendar mode
   * @type CalendarMode
   */
  @Input() mode!: CalendarMode;
  /**
   * Sets calendar date format (refer to http://primefaces.org/primeng/calendar)
   * @type string
   * @default 'dd-mm-yy'
   */
  @Input() dateFormat: string = 'dd-mm-yy';
  /**
   * Shows/hides calendar icon next to input
   * @type boolean
   * @default false
   */
  @Input() showCalendarIcon: boolean = false;
  /**
   * Enables user editing for selected date (modifiable input)
   * @type boolean
   * @default true
   */
  @Input() readOnly: boolean = true;
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Date object used when min-max mode is selected
   * @type Date
   */
  @Input() minDate?: Date;
  /**
   * Date object used when min-max mode is selected
   * @type Date
   */
  @Input() maxDate?: Date;
  /**
   * Time selection format (used only in any mode has time enabled)
   * @type HourFormat
   * @default '12'
   */
  @Input() timeFormat: HourFormat = '12';
  /**
   * Shows today & clear buttons in date picking
   * @type boolean
   * @default false
   */
  @Input() showButtons: boolean = false;
  /**
   * Shows week numbers in date picking
   * @type boolean
   * @default false
   */
  @Input() showWeeks: boolean = false;
  /**
   * Shows date picking as inline view
   * @type boolean
   * @default false
   */
  @Input() enableInline: boolean = false;
  /**
   * Displays label as floating label above input
   * @type boolean
   * @default false
   */
  @Input() floatLabel: boolean = false;
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External styling class for label (not when floatLabel is active)
   * @type string
   */
  @Input() labelClass!: string;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion declreation

  constructor(private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formdir.control;
    this.hasControlName();
    this.getKeys();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Fills _errorKeys with controlErrors keys
  getKeys(): void {
    if (this.controlErrors) {
      this._errorKeys = Object.keys(
        this.controlErrors
      ) as Array<FormInputErrorModes>;
    }
  }
  // Check controlName value
  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    }
  }
  //#endregion Methods
}
