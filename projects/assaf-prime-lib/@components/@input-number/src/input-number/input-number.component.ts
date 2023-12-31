import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import {
  InputNumberButtonLayout,
  InputNumberMode,
  LocaleMatcher,
} from '../models/input-number-model';
import { FormInputErrorModes, FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
})
export class AssafInputNumberComponent implements OnInit {
  //#region Declerations
  /**
   * Sets locale of input
   * @type string
   */
  @Input() locale!: string;
  /**
   * Sets locale mode
   * @type LocaleMatcher
   * @default 'best fit'
   */
  @Input() localeMatcher: LocaleMatcher = 'best fit';
  /**
   * Sets currency format
   * @type string
   */
  @Input() currency!: string;
  /**
   * Sets input mode
   * @type InputNumberMode
   * @default 'decimal'
   */
  @Input() mode: InputNumberMode = 'decimal';
  /**
   * Sets the input size in pexels
   * @type number
   * @default 20
   */
  @Input() size: number = 20;
  /**
   * Sets layout of increment/decrement buttons
   * @type InputNumberButtonLayout
   * @default 'stacked'
   */
  @Input() buttonLayout: InputNumberButtonLayout = 'stacked';
  /**
   * Adds text before number
   * @type string
   */
  @Input() prefix!: string;
  /**
   * Adds text after number
   * @type string
   */
  @Input() suffix!: string;
  /**
   * Sets min number of fraction digits
   * @type number
   */
  @Input() minFractionDigits!: number;
  /**
   * Sets max number of fraction digits
   * @type number
   */
  @Input() maxFractionDigits!: number;
  /**
   * Sets min number entered in input
   * @type number
   */
  @Input() minValue!: number;
  /**
   * Sets max number entered in input
   * @type number
   */
  @Input() maxValue!: number;
  /**
   * Sets increment/decrement step
   * @type number
   * @default 1
   */
  @Input() step: number = 1;
  /**
   * External styling class for input
   * @type string
   */
  @Input() inputStyleClass!: string;
  /**
   * Sets input as read only
   * @type boolean
   * @default false
   */
  @Input() readOnly: boolean = false;
  /**
   * Shows clear icon that clears entered value
   * @type boolean
   * @default false
   */
  @Input() showClear: boolean = false;
  /**
   * Shows increment & decrement buttons
   * @type boolean
   * @default false
   */
  @Input() showButtons: boolean = false;
  /**
   * External styling class for increment button
   * @type string
   */
  @Input() incrementButtonClass!: string;
  /**
   * External styling class for decrement button
   * @type string
   */
  @Input() decrementButtonClass!: string;
  /**
   * Sets increment button icon
   * @type string
   * @default 'pi-chevron-up'
   */
  @Input() incrementButtonIcon: string = 'pi-chevron-up';
  /**
   * Sets decrement button icon
   * @type string
   * @default 'pi-chevron-down'
   */
  @Input() decrementButtonIcon: string = 'pi-chevron-down';
  /**
   * Enables leaving the input empty
   * @type boolean
   * @default false
   */
  @Input() allowEmpty: boolean = true;
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Sets input label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets input placeholder text
   * @type string
   * @default 'Select Item'
   */
  @Input() placeholder: string = 'Enter Number';
  /**
   * Displays label as floating label above input
   * @type boolean
   * @default false
   */
  @Input() floatLabel: boolean = false;
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
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @type boolean
   * @default true
   */
  @Input() useGrouping: boolean = true;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion Declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.hasControlName();
    this.getKeys();
    this.hasCurrency();
    this.setValidators();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  //Adds validators based on minValue or maxValue
  setValidators(): void {
    if (this.minValue !== undefined) {
      this._form.controls[this.controlName].addValidators(
        Validators.min(this.minValue)
      );
    }
    if (this.maxValue !== undefined) {
      this._form.controls[this.controlName].addValidators(
        Validators.max(this.maxValue)
      );
    }
  }
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
  // Throws an error if currency attribute is not provided in currency mode
  hasCurrency(): void {
    if (this.mode === 'currency' && !this.currency) {
      throw new Error('Currency mode detected, please provide currency format');
    }
  }
  //#endregion Methods
}
