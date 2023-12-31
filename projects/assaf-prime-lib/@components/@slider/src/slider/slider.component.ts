import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormInputErrors, FormInputErrorModes } from 'assaf-prime-lib/models';
import { SliderOrientation } from '../model/slider-model';

@Component({
  selector: 'assaf-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class AssafSliderComponent implements OnInit {
  //#region Declerations
  /**
   * Form control name for data binding (need to be provided if placed if formGroup)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Value for binding if not placed in formGroup
   * @type number
   */
  @Input() value!: number;
  /**
   * Slider orientation
   * @type SliderOrientation
   * @default 'horizontal'
   */
  @Input() orientation: SliderOrientation = 'horizontal';
  /**
   * Allows range selection (min-max)
   * @type boolean
   * @default false
   */
  @Input() range: boolean = false;
  /**
   * Number of slider steps
   * @type number
   */
  @Input() step!: number;
  /**
   * Disables slider editing (in case of formGroup don't use & provide it in formControl)
   * @type boolean
   * @default false
   */
  @Input() disabled: boolean = false;
  /**
   * Min slider value (if range is active)
   * @type number
   * @default 0
   */
  @Input() minBoundary: number = 0;
  /**
   * Max slider value (if range is active)
   * @type number
   * @default 100
   */
  @Input() maxBoundary: number = 100;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * External styling class for label (not when floatLabel is active)
   * FormInputErrors
   */
  @Input() labelClass!: string;

  /**
   * Event triggered when value changed when outside of formGroup
   * @emits number | number[ ]
   */
  @Output() valueChange: EventEmitter<number | Array<number>> =
    new EventEmitter();

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
  // Calls event emitter when value changes
  onChange(newValue: number | Array<number>) {
    this.valueChange.emit(newValue);
  }
  // Validates binding provided
  validateBinding(): void {
    if ((this._form ? !this.value : this.value) === undefined) {
      throw new Error('No binding provided');
    } else if (this._form && !this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    } else if (this._form && this.value !== undefined) {
      throw new Error('FormGroup detected remove value binding');
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
  //#endregion Methods
}
