import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { IconPosition, InputMode } from '../../models/input-model';
import { Size } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class AssafTextinputComponent implements OnInit {
  //#region declerations
  // Sets input viewing & data type
  @Input() type: InputMode = 'text';
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Form control name for data binding
  @Input() controlName!: string;
  // Sets input size (for normal size don't set attribute)
  @Input() size!: Size;
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Icon name to be placed next to input
  @Input() icon!: string;
  // Sets icon position (works only if icon is provided)
  @Input() iconPos: IconPosition = 'left';
  // External styling class/es
  @Input() styleClass: string = '';
  // External styling class for label (not when floatLabel is active)
  @Input() labelClass!: string;
  // Enables/disables auto complete for input
  @Input() autocomplete: 'on' | 'off' = 'on';
  // Sets input name for auto complete (works for text mode only)
  @Input() name!: string;
  // @Input() rightIcon!: string;
  // @Input() leftIcon!: string;

  /* Internal component variables */
  _form!: FormGroup;
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
  }
  //#endregion Life Cycle Hooks

  //#region Methods
  getAutoComplete(): string {
    return this.autocomplete === 'on' ? this.name : this.autocomplete;
  }
  //#endregion Methods
}
