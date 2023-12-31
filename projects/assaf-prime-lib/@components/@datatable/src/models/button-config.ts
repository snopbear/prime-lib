import { Severity } from 'assaf-prime-lib/models';
import { State } from './state';
import { ButtonIconPosition } from 'assaf-prime-lib/@components/@button';

export interface ButtonConfig extends State {
  /**
   * Sets button label text
   * @type string
   * @Optional
   */
  label?: string;
  /**
   * Sets button severity color
   * @type Severity
   * @Optional
   */
  severity?: Severity;
  /**
   * Sets button icon
   * @type string
   * @Optional
   * @example 'pi-heart'
   */
  icon?: string;
  /**
   * Styling button class
   * @type string
   * @Optional
   */
  class?: string;
  /**
   * Sets button style to raised style
   * @type boolean
   * @Optional
   */
  isRaised?: boolean;
  /**
   * Sets button style to rounded style
   * @type boolean
   * @Optional
   */
  isRounded?: boolean;
  /**
   * Sets button style to text style
   * @type boolean
   * @Optional
   */
  isText?: boolean;
  /**
   * Sets button style to outline style
   * @type boolean
   * @Optional
   */
  isOutline?: boolean;
  /**
   * Sets icon position with respect to text
   * @type ButtonIconPosition
   * @Optional
   */
  iconPos?: ButtonIconPosition;
  /**
   * Sets button style to link style
   * @type boolean
   * @Optional
   */
  isLink?: boolean;
}
