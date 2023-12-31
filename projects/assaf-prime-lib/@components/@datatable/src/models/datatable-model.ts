import { ButtonConfig } from './button-config';
import { ColumnType } from './data-table-types';
import { DropDownConfig } from './dropdown-config';
import { State } from './state';

export interface TableColumn {
  /**
   * Sets column type to be viewed
   * @type ColumnType
   */
  type: ColumnType;
  /**
   * Sets column header title
   * @type string
   * @Optional
   */
  title?: string;
  /**
   * Object key in the data array passed to the table, each column is mapping & viewing a certain key from the data array
   * @type string
   * @Optional
   * @example
   * data = [{ firstName:'A', lastName:'B' }]
   * @description So for the first column of the table the dataKey will be 'firstName'
   */
  dataKey?: string;
  /**
   * Array of buttons to be viewed in the created column, (use only when type is set to 'button')
   * @type ButtonConfig[ ]
   * @Optional
   * @example
   * btnConfig:[{ event:'add', label:'Add' icon:'pi-plus' }]
   * @description Will create only one button with 'add' event
   */
  btnConfig?: Array<ButtonConfig>;
  /**
   * Object containing event name & state (use only when type is set to 'switch')
   * @type State
   * @Optional
   */
  switchConfig?: State;
  /**
   * Enables sorting mode for the column
   * @type boolean
   * @Optional
   */
  sortable?: boolean;
  /**
   * External styling class for each cell in the column
   * @type string
   * @Optional
   */
  cellStyleClass?: string;
  /**
   * External styling class for header cell of the column
   * @type string
   * @Optional
   */
  headerStyleClass?: string;
  /**
   * External styling class for header cell of the column in mobile view
   * @type string
   * @Optional
   */
  mobileHeaderStyleClass?: string;
  /**
   * Icon to be rendered in each cell (use only when type is set to 'icon')
   * @type string
   * @Optional
   */
  cellIcon?: string;
  /**
   * Object containg dropdown configuration to be used in each cell
   * @type DropDownConfig
   * @Optional
   */
  dropDownConfig?: DropDownConfig;
  /**
   * Callback function to be used as a pipe in each column cell to alter/modify text value
   * @param value value to be modified
   * @returns new formatted string based on logic placed inside callback
   * @example textPipe:(value:string) => { return value.length > 5 ? '...' : value }
   * @description In this callback if string length of value is bigger than 5 '...' will bre displayed otherwise value will be displayed as it is
   */
  textPipe?(value: string | number | Date): string;
  /**
   * Callback function used to apply conditional classes based on passed logic
   * @param value full object value of each row
   * @example stylePipe:(value:Employee) => { return value.active ? 'green' : 'red' }
   * @description 'green' class will be applied to cell if active is true otherwise 'red' is applied
   */
  stylePipe?(value: any): string;
}
