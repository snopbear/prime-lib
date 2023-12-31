import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assaf-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class AssafEditorComponent implements OnInit {
  //#region Declerations
  // Form control name for data binding (need to be provided otherwise an exception is thrown)
  @Input() controlName!: string;
  // External styling class/es
  @Input() styleClass!: string;
  //set label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Select Item';
  // Disables editing
  @Input() readonly: boolean = false;

  /* Internal component variables */
  _form!: FormGroup;
  //#region Declerations

  constructor(private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit() {
    this._form = this.__formdir.control;
    this.hasControlName();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Check controlName value
  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    }
  }
  //#endregion Methods
}
