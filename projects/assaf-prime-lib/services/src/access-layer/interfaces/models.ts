export interface State<T> {
  data: T[];
  selectedId: number | string;
}

export interface AccessLayerConfig extends RequestURLs {
  /**
   * Data key for each object identifier
   * @type string
   */
  idDataKey: string;
}

interface RequestURLs {
  get?: string;
  post?: string;
  put?: string;
  delete?: string;
}
