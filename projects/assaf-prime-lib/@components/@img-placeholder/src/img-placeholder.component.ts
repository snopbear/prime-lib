import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: '[assaf-img-placeholder]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './img-placeholder.component.html',
  styleUrls: ['./img-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssafImgPlaceholderComponent {
  //#region Declerations
  /**
   * Placeholder image to be rendered during actual img load
   * @type string
   */
  @Input() placeholder!: string;
  /**
   * Actual img src
   * @type string
   */
  @Input() src!: string;
  /**
   * Actual img alternative text
   * @type string
   */
  @Input() alt!: string;
  /**
   * Sets placeholder img width
   * @type string
   */
  @Input() placeholderWidth!: string;
  /**
   * Sets placeholder img height
   * @type string
   */
  @Input() placeholderHeight!: string;
  /**
   * Sets actual img width
   * @type string
   */
  @Input() imgWidth!: string;
  /**
   * Sets actual img height
   * @type string
   */
  @Input() imgHeight!: string;
  /**
   * Enables/disables lazy img load using NgOptimizedImage
   * @type boolean
   * @default false
   */
  @Input() lazyLoad: boolean = false;

  // Shows/hides placeholder img
  _showPlaceholder: BehaviorSubject<boolean> = new BehaviorSubject(true);
  //#endregion Declerations

  //#region Methods
  onImgLoad(): void {
    this._showPlaceholder.next(false);
  }
  //#endregion Methods
}
