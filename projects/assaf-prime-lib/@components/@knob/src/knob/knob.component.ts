import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplatePosition } from '../model/knob-model';

@Component({
  selector: 'assaf-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
})
export class AssafKnobComponent implements OnInit {
  //#region Declerations
  /**
   * Value to be binded
   * @type number
   */
  @Input() value!: number;
  /**
   * Color of value displayed
   * @type string
   * @default '#3B82F6'
   */
  @Input() valueColor: string = '#3B82F6';
  /**
   * Color of knob range
   * @type string
   * @default '#dfe7ef'
   */
  @Input() rangeColor: string = '#dfe7ef';
  /**
   * Set label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Disable knob
   * @type boolean
   * @default false
   */
  @Input() disabled: boolean = false;
  /**
   * Sets knob min value
   * @type number
   * @default 0
   */
  @Input() minValue: number = 0;
  /**
   * Sets knob size in pexels
   * @type number
   * @default 100
   */
  @Input() size: number = 100;
  /**
   * Sets knob max value
   * @type number
   * @default 100
   */
  @Input() maxValue: number = 100;
  /**
   * Sets knob selection step
   * @type number
   * @default 1
   */
  @Input() step: number = 1;
  /**
   * Sets stroke thickness
   * @type number
   * @default 14
   */
  @Input() strokeWidth: number = 14;
  /**
   * Sets template to be placed next to value
   * @type string
   */
  @Input() valueTemplate!: string;
  /**
   * Disables knob editing
   * @type boolean
   * @default false
   */
  @Input() readOnly: boolean = false;
  /**
   * Sets valueTemplate position
   * @type TemplatePosition
   * @default 'right'
   */
  @Input() templatePos: TemplatePosition = 'right';

  /**
   * Event triggered if value is changed
   * @emits number
   */
  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  /* Internal component variables */
  _valueTemplate: string = '{value}';
  //#endregion Declerations

  //#region LifeCycle Hooks
  ngOnInit() {
    this.setTemplate();
    this.hasValue();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Triggers valueChange event
  onChange(newValue: number) {
    this.valueChange.emit(newValue);
  }
  // Check if value property is provided
  hasValue(): void {
    if (!this.value) {
      throw new Error('No value attribute provided for binding');
    }
  }
  // Sets value template format
  setTemplate(): void {
    if (this.valueTemplate) {
      this._valueTemplate =
        this.templatePos === 'right'
          ? this._valueTemplate + this.valueTemplate
          : this.valueTemplate + this._valueTemplate;
    }
  }
  //#endregion Methods
}
