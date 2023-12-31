import { Component, Input } from '@angular/core';

@Component({
  selector: 'assaf-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class AssafImageComponent {
  //#region Declerations
  /**
   * Show image preview
   * @type boolean
   * @default false
   */
  @Input() showPreview: boolean = false;
  /**
   * Image width
   * @type string
   */
  @Input() width!: string;
  /**
   * Image height
   * @type string
   */
  @Input() height!: string;
  /**
   * Image src directory
   * @type string
   */
  @Input() src!: string;
  /**
   * Image alt text
   * @type string
   */
  @Input() alt!: string;
  /**
   * Image style class
   * @type string
   */
  @Input() imageStyle!: string;
  /**
   * External class/es for component
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Custom preview
   * @type boolean
   * @default false
   */
  @Input() customPreview: boolean = false;
  //#endregion Declerations
}
