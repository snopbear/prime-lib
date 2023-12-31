import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Countries } from '../data/countries';
import { Country, CountryCode } from '../models';
import { FormInputErrorModes, FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.scss'],
})
export class AssafPhonenumberComponent implements OnInit {
  //#region Declerations
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Sets custom placeholder, when provided auto placeholder gets disabled
   * @type string
   */
  @Input() customPlaceholder!: string;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External styling class/es for phone input section
   * @type string
   */
  @Input() inputStyleClass!: string;
  /**
   * External styling class/es for phone dropdown section
   * @type string
   */
  @Input() dropdownStyleClass!: string;
  /**
   * Sets country to be selected on initial render
   * @type CountryCode
   * @default CountryCode.Egypt
   */
  @Input() pereferedCountry: CountryCode = CountryCode.Egypt;
  /**
   * Control errors messages, validations are automatically added in Validators.pattern
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * Sets input label text
   * @type string
   */
  @Input() label!: string;
  /**
   * External styling class for label (not when floatLabel is active)
   * @type string
   */
  @Input() labelStyleClass!: string;
  /**
   * Enables validation for countries in array only
   * @type CountryCode[ ]
   */
  @Input() onlyValidate!: Array<CountryCode>;
  /**
   *
   */
  @Input() hasDetailedError: boolean = false;

  /* Internal component variables */
  _selectedCountry!: Country;
  _phoneNumber!: string;
  _activeDialCode!: string;
  _form!: FormGroup;
  _oldSelectedCountry!: Country;
  _showErrorDetails: boolean = false;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];

  get _countries() {
    return Countries;
  }
  get _formControl() {
    return this._form.controls[this.controlName] as FormControl;
  }
  //#endregion Declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.hasControlName();
    this.getActiveCountry();
    this.setValidation();
    this.hasControlName();
    this.getKeys();
  }
  //#endregion Life Cycle Hooks

  //#region Methods
  // Validates if control name is provided
  hasControlName(): void {
    if (!this.controlName || !this._formControl) {
      throw new Error('Control name must be provided');
    }
  }
  // Called when country code dropdown gets changed
  activeDialChanged(event: any): void {
    this._activeDialCode = event.value.dial_code;
    this.removeErrorMessage();
    this.updateSelectedCountryValidator();
    this.setValidation();
    this.removeCountryCode();
    this._oldSelectedCountry = this._selectedCountry;
  }
  // Sets currently selected country
  getActiveCountry(): void {
    this._selectedCountry = this._countries.find(
      (country) => country.code === this.pereferedCountry
    )!;
    this._activeDialCode = this._selectedCountry.dial_code;
    this._oldSelectedCountry = this._selectedCountry;
    this.updateSelectedCountryValidator();
  }
  // Returns placeholder value based on customPlaceholder or automatic based on country code
  getPlaceholder(): string {
    return this.customPlaceholder
      ? this.customPlaceholder
      : this._selectedCountry.placeholder;
  }
  // Updates validations of current form control based on new selected country code, it also adds validation to current
  // form control based on the onlyValidate items, if not provided it's added automatically
  setValidation(): void {
    this._formControl.removeValidators(this._oldSelectedCountry.validator!);
    this._formControl.updateValueAndValidity();
    this.addValidationToControl();
    this._formControl.updateValueAndValidity();
    this._oldSelectedCountry.validator = this._selectedCountry.validator!;
  }
  // Called when phone input gets changed
  onPhoneChange(event: string): void {
    this._formControl.setValue(this.setValue(event));
  }
  // Marks current control as touched
  touched(): void {
    this._formControl.markAsTouched();
  }
  // Sets current selected country object with validator based on pattern
  updateSelectedCountryValidator(): void {
    this._selectedCountry.validator = Validators.pattern(
      this._selectedCountry.pattern
    );
    if (this.controlErrors?.pattern) {
      this.controlErrors.pattern = this.setErrorMessage(
        this.controlErrors?.pattern!
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
  //Reformats the string to be submitted
  setValue(newValue: string): string {
    let result = newValue;

    // const dialCode = this._selectedCountry.dial_code.substring(1);
    // if (newValue.startsWith(dialCode)) {
    //   result = result.replace(dialCode, '');
    // }

    // if (
    //   newValue.startsWith('0') &&
    //   this._selectedCountry.dial_code.endsWith('0')
    // ) {
    //   result = result.substring(1);
    // }

    result = result
      .replace(/[\s-]/g, '')
      .replace(this._selectedCountry.dial_code, '');
    result = this._selectedCountry.dial_code + result;

    return newValue === '' ? '' : result;
  }
  // Updates pattern error message with currently active regex
  setErrorMessage(value: string): string {
    return !this.customPlaceholder &&
      value &&
      !value.includes(this._selectedCountry.placeholder)
      ? value + ` ${this._selectedCountry.placeholder}`
      : value;
  }
  // Removes old placeholder from message
  removeErrorMessage(): void {
    const value = this.controlErrors.pattern;
    if (
      !this.customPlaceholder &&
      value &&
      value.includes(this._oldSelectedCountry?.placeholder)
    ) {
      this.controlErrors.pattern = value.replace(
        this._oldSelectedCountry!.placeholder,
        ''
      );
    }
  }
  // Adds regex pattern validation to current form control based on wether the onlyValidate is provided or not
  // If not provided the regex is added automatically on country change
  addValidationToControl(): void {
    if (this.onlyValidate) {
      if (this.onlyValidate.includes(this._selectedCountry.code)) {
        this._formControl.addValidators(this._selectedCountry.validator!);
      }
    } else {
      this._formControl.addValidators(this._selectedCountry.validator!);
    }
  }
  // Removes old country code from form control value
  removeCountryCode(): void {
    const updatedVal = (this._formControl.value as string).replace(
      this._oldSelectedCountry.dial_code,
      this._selectedCountry.dial_code
    );
    this._formControl.setValue(this.setValue(updatedVal));
  }
  toggleShow(): void {
    if (this.hasDetailedError) {
      this._showErrorDetails = !this._showErrorDetails;
    }
  }
  //#endregion Methods
}
