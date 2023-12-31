import { Component, Input } from '@angular/core';
import { TargetMode, BehaviorMode } from '../model/scroll-top';

@Component({
  selector: 'assaf-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrls: ['./scroll-panel.component.scss'],
})
export class AssafScrollPanelComponent {
  //#region Declerations
  /**
   * Sets threshold for the button to appear
   * @type number
   * @default 100
   */
  @Input() threshold: number = 100;
  /**
   * Sets icon of button
   * @type string
   * @default 'pi-chevron-up'
   */
  @Input() icon: string = 'pi-chevron-up';
  /**
   * Sets parent target
   * @type TargetMode
   * @default 'parent'
   */
  @Input() target: TargetMode = 'parent';
  /**
   * Sets scrolling to top behavior
   * @type BehaviorMode
   * @default 'smooth'
   */
  @Input() behavior: BehaviorMode = 'smooth';
  /**
   * Style class of the container
   * @type string
   */
  @Input() containerClass!: string;
  /**
   * Style class of the scrollTop button.
   * @type string
   */
  @Input() scrollTopClass!: string;
  /**
   * Enables back to top button
   * @type boolean
   * @default false
   */
  @Input() hasScrollTop: boolean = false;
  //#endregion Declerations
}
