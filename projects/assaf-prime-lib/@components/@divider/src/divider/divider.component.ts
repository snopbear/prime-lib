import { Component, Input, OnInit } from '@angular/core';
import {
  DividerHorizontalAlign,
  DividerIconPos,
  DividerLayout,
  DividerMode,
  DividerType,
  DividerVerticalAlign,
} from '../model/divider.model';

@Component({
  selector: 'assaf-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class AssafDividerComponent implements OnInit {
  //#region declerations
  /**
   * Text to be placed on divider
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets divider line shape
   * @type DividerType
   * @default 'solid'
   */
  @Input() type: DividerType = 'solid';
  /**
   * Sets divider orientation
   * @type DividerLayout
   * @default 'horizontal'
   */
  @Input() layout: DividerLayout = 'horizontal';
  /**
   * Sets divider header position
   * @type DividerHorizontalAlign | DividerVerticalAlign
   * @default 'center'
   */
  @Input() align: DividerHorizontalAlign | DividerVerticalAlign = 'center';
  /**
   * Sets divider mode, for default don't set value to property
   * @type DividerMode
   */
  @Input() mode!: DividerMode;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Icon to be placed next to label (active only in icon mode)
   * @type string
   */
  @Input() icon!: string;
  /**
   * Sets icon position
   * @type DividerIconPos
   * @default 'left'
   */
  @Input() iconPos: DividerIconPos = 'left';
  //#endregion declerations

  //#region LifeCycle Hooks
  ngOnInit() {
    this.validateLayout();
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Check that layout matches align
  validateLayout(): void {
    if (this.layout === 'horizontal' && this.isVerticalAlign(this.align)) {
      throw new Error('Wrong align value');
    } else if (
      this.layout === 'vertical' &&
      this.isHorizontalAlign(this.align)
    ) {
      throw new Error('Wrong align value');
    }
  }
  // Checks is align value matches vertical layout
  isVerticalAlign(
    value: DividerVerticalAlign | DividerHorizontalAlign
  ): boolean {
    return value === 'bottom' || value === 'top';
  }
  // Checks is align value matches horizontal layout
  isHorizontalAlign(
    value: DividerHorizontalAlign | DividerVerticalAlign
  ): boolean {
    return value === 'left' || value === 'right';
  }
  //#endregion Methods
}
