export interface LazyLoadAction {
  /**
   * Active filters
   * @type any
   */
  filters: any;
  /**
   * Indicates current pagination index
   * @type number
   */
  first: number;
  /**
   * Used to update/refresh component
   * @type function
   */
  forceUpdate: Function;
  /**
   * Current global filter
   * @type any
   */
  globalFilter: any;
  /**
   * Current sort meta data
   * @type any
   */
  multiSortMeta: any;
  /**
   * Number of rows to be viewed in each page
   * @type number
   */
  rows: number;
  /**
   * Activated sort field
   * @type string
   */
  sortField: string;
  /**
   * Current sort order
   * @type number
   */
  sortOrder: number;
  /**
   * Current page in table
   * @type number
   */
  currentPage: number;
}
