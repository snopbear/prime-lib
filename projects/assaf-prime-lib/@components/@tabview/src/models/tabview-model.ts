import { LazyComponent } from "assaf-prime-lib/models";

export interface TabViewItem extends LazyComponent {
  /**
   * Sets tab view header text
   * @type string
   */
  header: string;
  /**
   * Icon class to be placed on left side of header text
   * @type string
   * @Optional
   */
  leftIcon?: string;
  /**
   * Icon class to be placed on right side of header text
   * @type string
   * @Optional
   */
  rightIcon?: string;
  /**
   * External styling class for header tab
   * @type string
   * @Optional
   */
  headerStyleClass?: string;
}
