import { Component, Input } from '@angular/core';
import { BadgeSize } from '../models/badge-model';
import { BadgeSeverity } from '../models/badge-severity';


@Component({
  selector: 'assaf-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class AssafBadgeComponent {
  /**
   * Sets value badge
   * @type string
   */
  @Input() value!: string;
  /**
   * Sets Icon
   */
  @Input() icon!: string;
  /**
   * Sets options are "large" and "xlarge"
   * @type BadgeSize
   */
  @Input() size!: BadgeSize;
  /**
   * Sets style class icon
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Sets badge color
   * @type Severity
   * @default 'success'
   */
  @Input() severity: BadgeSeverity = 'success';
}
