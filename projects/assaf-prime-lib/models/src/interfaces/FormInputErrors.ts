export interface FormInputErrors extends GenericType {
  /**
   * Form validator required error message
   * @type string
   * @Optional
   */
  required?: string;
  /**
   * Form validator minimum length error message
   * @type string
   * @Optional
   */
  minlength?: string;
  /**
   * Form validator maximum length error message
   * @type string
   * @Optional
   */
  maxlength?: string;
  /**
   * Form validator pattern error message
   * @type string
   * @Optional
   */
  pattern?: string;
  /**
   * Form validator email error message
   * @type string
   * @Optional
   */
  email?: string;
  /**
   * Form validator maximum value error message
   * @type string
   * @Optional
   */
  max?: string;
  /**
   * Form validator minimum value error message
   * @type string
   * @Optional
   */
  min?: string;
  /**
   * Form validator required true error message (used with checkboxes)
   * @type string
   * @Optional
   */
  requiredTrue?: string;
}

type GenericType = {
  [key: string]: string | undefined;
};
