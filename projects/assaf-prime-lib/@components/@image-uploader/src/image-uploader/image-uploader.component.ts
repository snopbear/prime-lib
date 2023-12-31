import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import {
  createSelectedFile,
  ImageFile,
  SelectedFile,
  UploadMode,
} from '../models/image-uploader-model';

@Component({
  selector: 'assaf-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class AssafImageUploaderComponent implements OnInit {
  //#region Declerations
  /**
   * Sets width of container
   * @type string
   * @default '100px'
   */
  @Input() width: string = '100px';
  /**
   * Sets height of container
   * @type string
   * @default '100px'
   */
  @Input() height: string = '100px';
  /**
   * External style class for container
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External style class for uploader
   * @type string
   */
  @Input() uploaderClass!: string;
  /**
   * External style class for active image
   * @type string
   */
  @Input() activeImageClass!: string;
  /**
   * External style class for overlay
   * @type string
   */
  @Input() overlayClass!: string;
  /**
   * Sets overlay icon
   * @type string
   * @default 'pi-times-circle'
   */
  @Input() overlayIcon: string = 'pi-times-circle';
  /**
   * Sets upload icon
   * @type string
   * @default 'pi-upload'
   */
  @Input() uploadIcon: string = 'pi-upload';
  /**
   * Sets file extension
   * @type ImageFile
   * @default 'image/*'
   */
  @Input() fileType: ImageFile = 'image/*';
  /**
   * Sets emitting mode of event
   * @type UploadMode
   * @default 'file'
   */
  @Input() uploadMode: UploadMode = 'file';
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Event emitter triggered on file selection or cancelling selection
   * @emits SelectedFile | null | File
   */
  @Output() onChange: EventEmitter<SelectedFile | null | File> =
    new EventEmitter();

  /* Internal component variables */
  _form!: FormGroup;
  // Changes the view after selection
  _activateInplace: boolean = false;
  // Holds the selected image to be viewed
  _activeImage: string = '';
  //#endregion Declerations

  constructor(@Optional() private __formdir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    if (this.__formdir) {
      this._form = this.__formdir.control;
      this.hasControlName();
    }
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Check controlName value
  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    }
  }
  // Clears value of input in case same file is selected
  onFileClick(event: any): void {
    event.target.value = '';
  }
  // Called when clicked on image after selection
  onCancelClick(): void {
    this._activateInplace = false;
    this._activeImage = '';
    this.controlName
      ? this._form.controls[this.controlName].setValue(null)
      : this.onChange.emit(null);
  }
  // Called when user selects file
  onFileSelect(event: any): void {
    if (event.target.files['length'] > 0) {
      this.toBase64(event.target.files[0])
        .then((convertedImg) => {
          this._activeImage = convertedImg as string;
          this.handleEvent(event.target.files[0]);
          this._activateInplace = true;
        })
        .catch((error) => console.log(error));
    }
  }
  // Handles emitting event after selecting/clearing file selection
  handleEvent(file: File): void {
    if (this.uploadMode === 'file') {
      this.controlName
        ? this._form.controls[this.controlName].setValue(file)
        : this.onChange.emit(file);
    } else {
      const selectedFile = createSelectedFile(
        file.name,
        file.type,
        file.size,
        this._activeImage
      );
      this.controlName
        ? this._form.controls[this.controlName].setValue(selectedFile)
        : this.onChange.emit(selectedFile);
    }
  }
  // Converts selected image to base64 format
  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
  //#endregion Methods
}
