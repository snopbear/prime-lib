import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonIconPosition } from 'assaf-prime-lib/@components/@button';
import { Severity, Size } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-button-uploader',
  templateUrl: './button-uploader.component.html',
  styleUrls: ['./button-uploader.component.scss'],
})
export class AssafButtonUploaderComponent {
  //#region Declerations
  /**
   * Sets button text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets button color based on imported theme file in project
   * @type Severity
   * @default 'info'
   */
  @Input() severity: Severity = 'info';
  /**
   * Sets button shape to raised
   * @type boolean
   * @default false
   */
  @Input() isRaised: boolean = false;
  /**
   * Sets button shape to rounded
   * @type boolean
   * @default false
   */
  @Input() isRounded: boolean = false;
  /**
   * Sets button shape to text
   * @type boolean
   * @default false
   */
  @Input() isText: boolean = false;
  /**
   * Sets button shape to outline
   * @type boolean
   * @default false
   */
  @Input() isOutline: boolean = false;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets button icon
   * @type string
   */
  @Input() btnIcon!: string;
  /**
   * Sets icon position (works only if icon is provided)
   * @type ButtonIconPosition
   * @default 'left'
   */
  @Input() iconPos: ButtonIconPosition = 'left';
  /**
   * Sets file extension
   * @type string
   * @default ''
   */
  @Input() fileType: string = '';
  /**
   * Sets button size (for normal size don't set attribute)
   * @type Size
   */
  @Input() size!: Size;
  /**
   * Enables selecting multiple files from file picker
   * @type boolean
   * @default false
   */
  @Input() multiple: boolean = false;
  /**
   * Event emitter triggered on file selection
   * @emits File | File [ ]
   */
  @Output() onChange: EventEmitter<File | File[]> = new EventEmitter();
  //#endregion Declerations

  //#region Methods
  // Called after user selects a file to emit event
  onFileSelect(event: any): void {
    if (event.target.files['length'] > 0) {
      const files: File[] = Array.from(event.target.files);
      this.onChange.emit(this.multiple ? files : files[0]);
    }
  }
  // Clears value of input in case same file is selected
  onFileClick(event: any): void {
    event.target.value = '';
  }
  //#endregion Methods
}
