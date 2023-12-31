import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'assaf-passwordinput',
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.scss'],
})
export class AssafPasswordinputComponent implements OnInit {
  //#region declerations
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Shows password input feedback
  @Input() feedback: boolean = false;
  // Shows icon that shows entered password text
  @Input() toggleMask: boolean = false;
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // Form control name for data binding
  @Input() controlName!: string;
  // External styling class/es
  @Input() styleClass: string = '';
  // External styling class for label (not when floatLabel is active)
  @Input() labelClass!: string;

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
  //Marks input as touched to solve primeng touched issue
  touched(): void {
    this._form.controls[this.controlName].markAllAsTouched();
  }
  //#endregion Methods
}
