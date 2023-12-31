export interface FieldSetData {
  /**
   * Sets header text
   * @type string
   */
  header: string;
  /**
   * Content to be placed inside field set
   * @type string
   */
  content: string;
  /**
   * Enables/disables open/close button for field set
   * @type boolean
   * @Optional
   */
  isToggleable?: boolean;
}
