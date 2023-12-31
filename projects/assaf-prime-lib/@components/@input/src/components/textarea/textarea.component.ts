import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'assaf-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class AssafTextareaComponent implements OnInit {
  //#region declerations
  // Displays label as floating label above input
  @Input() floatLabel: boolean = false;
  // Form control name for data binding
  @Input() controlName!: string;
  // Sets input label text
  @Input() label!: string;
  // Sets input placeholder text
  @Input() placeholder: string = 'Placeholder';
  // External styling class/es
  @Input() styleClass: string = '';
  // Enables textarea auto sizing when text is entered
  @Input() autoSize: boolean = false;
  // Sets inital number of textarea rows (works only when autoSize is enabled)
  @Input() rows: number = 2;
  // External styling class for label (not when floatLabel is active)
  @Input() labelClass!: string;

  /* Internal component variables */
  _form!: FormGroup;
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region methods
  ngOnInit(): void {
    this._form = this.__formDir.control;
  }
  //#endregion methods
}
