import { DropDownItem } from 'assaf-prime-lib/@components/@dropdown';
import { State } from './state';

export interface DropDownConfig extends State {
  /**
   * External styling class
   * @type string
   * @Optional
   */
  styleClass?: string;
  /**
   * Data to be rendered in dropdown
   * @type DropDownItem[ ]
   */
  data: DropDownItem[];
  /**
   * Placeholder for dropdown
   * @type string
   */
  placeholder: string;
  /**
   * Shows/hides clear icon in the dropdown
   * @type boolean
   * @Optional
   */
  showClear?: boolean;
}
