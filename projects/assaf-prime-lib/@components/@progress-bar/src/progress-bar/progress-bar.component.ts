import { Component, Input } from '@angular/core';
import { LoadingService } from 'assaf-prime-lib/services';

@Component({
  selector: 'assaf-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class AssafProgressBarComponent {
  //#region Declerations
  /**
   * Current value of the progress.
   * @type number
   */
  @Input() value!: number;
  /**
   * Show or hide progress bar value.
   * @type boolean
   * @default false
   */
  @Input() showValue: boolean = false;
  /**
   * Style class of the component.
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Enables spinner to work based on interceptor
   * @type boolean
   * @default false
   */
  @Input() workWithInterceptor: boolean = false;
  /**
   * Defines the mode of the progress
   * @type 'determinate' | 'indeterminate'
   * @default 'determinate'
   */
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  /**
   * Unit sign appended to the value.
   * @type string
   * @default "%"
   */
  @Input() unit: string = '%';
  /**
   * Color for the background of the progress
   * @type string
   */
  @Input() backgroundColor!: string;
  /**
   * External style class for container in interceptor mode only
   * @type string
   */
  @Input() containerStyleClass!: string;
  /**
   * Sets progress bar height
   * @type string
   * @default '6px'
   */
  @Input() height: string = '6px';
  //#endregion Declerations

  constructor(public loaderService: LoadingService) {}
}
