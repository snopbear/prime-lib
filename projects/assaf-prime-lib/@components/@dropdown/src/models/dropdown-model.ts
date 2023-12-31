import { GeneralItem } from "assaf-prime-lib/models";

export interface DropDownItem extends GeneralItem {
  /**
   * Image to be placed next to label
   * @type string
   * @Optional
   */
  iconURL?: string;
  /**
   * Icon class to be placed next to label
   * @type string
   * @Optional
   */
  iconName?: string;
}

export declare type DropDownMode = 'text-flag' | 'text-svg' | 'text-icon';

export declare type MultiMode = 'chip' | 'template';
