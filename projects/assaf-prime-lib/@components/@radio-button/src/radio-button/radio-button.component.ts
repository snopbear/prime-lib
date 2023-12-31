import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormInputErrorModes, FormInputErrors, GeneralItem } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class AssafRadioButtonComponent implements OnInit {
  //#region Declerations
  /**
   * Array of checkbox items
   * @type GeneralItem[ ]
   * @default []
   */
  @Input() data: Array<GeneralItem> = [];
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion Declerations

  constructor(private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit() {
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
