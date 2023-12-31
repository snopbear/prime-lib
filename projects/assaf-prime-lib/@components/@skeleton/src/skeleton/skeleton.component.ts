import { Component, Input } from '@angular/core';
import { AnimationMode, SkeletonShape } from '../model/skeleton-model';

@Component({
  selector: 'assaf-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class AssafSkeletonComponent {
  //#region Declerations
  /**
   * Hight of the element.
   * @type string
   * @default '1rem'
   */
  @Input() height: string = '1rem';
  /**
   * Width of the element.
   * @type string
   */
  @Input() width!: string;
  /**
   * Border radius of the element
   * @type string
   */
  @Input() borderRadius!: string;
  /**
   * Sets size of the Circle or Square.
   * @type string
   */
  @Input() size!: string;
  /**
   * Style class of the skeleton.
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets Shape of the element
   * @type SkeletonShape
   * @default 'rectangle'
   */
  @Input() shape: SkeletonShape = 'rectangle';
  /**
   * Sets Type of the animation
   * @type AnimationMode
   * @default 'wave'
   */
  @Input() animation: AnimationMode = 'wave';
  //#endregion Declerations
}
