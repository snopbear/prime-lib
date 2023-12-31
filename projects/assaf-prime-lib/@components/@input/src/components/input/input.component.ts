import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { IconPosition, InputMode } from '../../models/input-model';
import { FormInputErrorModes, FormInputErrors, Size } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class AssafInputComponent implements OnInit {
  //#region declerations
  /**
   * Sets input viewing & data type
   * @type InputMode
   * @default 'text'
   */
  @Input() type: InputMode = 'text';
  /**
   * Sets input label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets input placeholder text
   * @type string
   * @default 'Placeholder'
   */
  @Input() placeholder: string = 'Placeholder';
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Sets input size (for normal size don't set attribute)
   * @type Size
   */
  @Input() size!: Size;
  // @Input() rightIcon!: string;
  // @Input() leftIcon!: string;
  /**
   * Displays label as floating label above input
   * @type boolean
   * @default false
   */
  @Input() floatLabel: boolean = false;
  /**
   * Icon name to be placed next to input
   * @type string
   */
  @Input() icon!: string;
  /**
   * Sets icon position (works only if icon is provided)
   * @type IconPosition
   * @default 'left'
   */
  @Input() iconPos: IconPosition = 'left';
  /**
   * Shows icon that shows entered password text
   * @type boolean
   * @default false
   */
  @Input() toggleMask: boolean = false;
  /**
   * Shows password input feedback
   * @type boolean
   * @default false
   */
  @Input() passwordFeedback: boolean = true;
  /**
   * Sets chip seperator character
   * @type string
   * @default ','
   */
  @Input() chipSeperator: string = ',';
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * External styling class/es
   * @type string
   * @default ''
   */
  @Input() styleClass: string = '';
  /**
   * Enables textarea auto sizing when text is entered
   * @type boolean
   * @default false
   */
  @Input() autoSize: boolean = false;
  /**
   * Sets inital number of textarea rows (works only when autoSize is enabled)
   * @type number
   * @default 2
   */
  @Input() rows: number = 2;
  /**
   * External styling class for label (not when floatLabel is active)
   * @type string
   */
  @Input() labelClass!: string;
  /**
   * Enables/disables auto complete for input type text only
   * @type boolean
   * @default true
   */
  @Input() autocomplete: boolean = true;
  /**
   * Sets input name for auto complete (works for text mode only)
   * @type string
   */
  @Input() name!: string;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
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
