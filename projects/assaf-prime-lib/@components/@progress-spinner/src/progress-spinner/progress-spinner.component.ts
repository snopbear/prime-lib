import { Component, Input } from '@angular/core';
import { LoadingService } from 'assaf-prime-lib/services';

@Component({
  selector: 'assaf-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class AssafProgressSpinnerComponent {
  //#region Declerations
  /**
   * External style class for spinner
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets spinner width
   * @type string
   * @default '2'
   */
  @Input() strokeWidth: string = '2';
  /**
   * Enables spinner to work based on interceptor
   * @type boolean
   * @default false
   */
  @Input() workWithInterceptor: boolean = false;
  /**
   * External style class for container in interceptor mode only
   * @type string
   */
  @Input() containerStyleClass!: string;
  //#endregion Declerations

  constructor(public loaderService: LoadingService) {}
}
