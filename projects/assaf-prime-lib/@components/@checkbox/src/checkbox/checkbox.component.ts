import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormInputErrorModes, FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class AssafCheckboxComponent implements OnInit {
  //#region Declerations
  /**
   * Checkbox label
   * @type string
   */
  @Input() label!: string;
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() control!: FormControl;
  /**
   * Value for binding if not placed in formGroup
   * @type string
   */
  @Input() value!: string;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External label styling class/es
   * @type string
   */
  @Input() labelStyleClass!: string;
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * Optional value for control input
   * @type string
   */
  @Input() controlValue!: string;

  /**
   * Event triggered when value changed when outside of formGroup
   * @emits any
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  /* Internal component variables */
  _form!: FormGroup;
  // This array is added as a workaround for the issue below, if resolved please update
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  //#endregion Declerations

  constructor(@Optional() private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit() {
    if (this.__formdir) {
      this._form = this.__formdir.control;
    }
    this.validateBinding();
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
  // Calls event emitter when value changes
  onChange(newValue: any) {
    this.valueChange.emit(newValue);
  }
  // Validates binding provided
  validateBinding(): void {
    if ((this._form ? !this.value : this.value) === undefined) {
      throw new Error('No binding provided');
    } else if (this._form && !this.control) {
      throw new Error('Reactive form detected please provide controlName');
    } else if (this._form && this.value !== undefined) {
      throw new Error('FormGroup detected remove value binding');
    }
  }
  //#endregion Methods
}
