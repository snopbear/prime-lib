import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { SortEvent } from 'primeng/api';
import {
  TableColumn,
  TableScrollHeight,
  State,
  LazyLoadAction,
} from '../../models';
import { DataService } from '../../services/data.service';
import { Size } from 'assaf-prime-lib/models';

@Component({
  selector: 'Assaf-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DataService],
})

// How the table works:
// - Firstly you need to pass an array of TableColumn object that contains the configuration of each column
// - If the type of column is button then on table init a state is created for each button based on the event attribute provided
//   and the activeState is subscribed to by the table component to sense any changes once a button is clicked
// - If a button is clicked it calls the modify method of the service & sends it's event name to it to alter the currently
//   active state and once the state is updated it triggers the subscriber which triggers the stateChange event sending
//   the event of the clicked button and the row object data associated

// For SSR (lazy loading):
// - Set lazy attribute to true
// - Pass a function to onLazyLoad event
// - Set loading attribute to true when fetching data

// Check link: http://primefaces.org/primeng/table/lazy

// Performance Tips
// - When selection is enabled use dataKey to avoid deep checking when comparing objects.
// - Use rowTrackBy to avoid unnecessary dom operations.
// - Prefer lazy loading for large datasets.
export class AssafDataTableComponent implements OnInit, OnDestroy, OnChanges {
  //#region Declerations
  /**
   * Enables table header
   * @type boolean
   * @default true
   */
  @Input() showTableHeader: boolean = true;
  /**
   * Datatable configuration array (sets viewing mode for each column)
   * @type TableColumn[ ]
   * @default []
   */
  @Input() tableColumns: Array<TableColumn> = [];
  /**
   * Array of data to be viewed in rows
   * @type any[ ]
   * @default []
   */
  @Input() data: Array<any> = [];
  /**
   * Sets table view size
   * @type Size
   */
  @Input() size!: Size;
  /**
   * Enables table gridlines
   * @type boolean
   * @default false
   */
  @Input() gridLines: boolean = false;
  /**
   * Enables stripped rows
   * @type boolean
   * @default false
   */
  @Input() isStriped: boolean = false;
  /**
   * Enables pagination in table
   * @type boolean
   * @default false
   */
  @Input() paginate: boolean = false;
  /**
   * Sets the list of number of pagination rows
   * @type number[ ]
   */
  @Input() rowsPerPageOptions!: Array<number>;
  /**
   * Sets number of pagination rows
   * @type number
   */
  @Input() rowsCountPerPage!: number;
  /**
   * Shows pagination report (works only when pagination is enabled)
   * @type boolean
   * @default false
   */
  @Input() showPageReport: boolean = false;
  /**
   * Enables scrolling inside table
   * @type boolean
   * @default false
   */
  @Input() isScrollable: boolean = false;
  /**
   * Sets scroll height (works only when isScrollable is enabled)
   * @type TableScrollHeight
   * @default 'flex'
   */
  @Input() scrollHeight: TableScrollHeight = 'flex';
  /**
   * External class for styling ptable component
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External class for styling table
   * @type string
   */
  @Input() tableClass!: string;
  /**
   * Enables external sorting (subscribe to event to sort)
   * @type boolean
   * @default false
   */
  @Input() hasCustomSort: boolean = false;
  /**
   * Enables freezing header by adding freeze class to tableClassStyle
   * @type boolean
   * @default false
   */
  @Input() freezeHeader: boolean = false;
  /**
   * Datakey to enable expanded row
   * @type string
   */
  @Input() rowExpansionDataKey!: string;
  /**
   * Array of dataKeys to be used when global search is enabled
   * @type string[ ]
   * @default []
   */
  @Input() filterKeys: string[] = [];
  /**
   * Expands all rows on component loading
   * @type boolean
   * @default false
   */
  @Input() expandedByDefault: boolean = false;
  /**
   * Shows/hides expanded row button
   * @type boolean
   * @default true
   */
  @Input() showExpandedButton: boolean = true;
  /**
   * Enables lazy loading
   * @type boolean
   * @default false
   */
  @Input() lazyLoad: boolean = false;
  /**
   * Total records used in pagination
   * @type number
   */
  @Input() totalRecords!: number;
  /**
   * Enables loading spinner when fetching data in lazy loading
   * @type boolean
   * @default false
   */
  @Input() loading: boolean = false;
  /**
   * Resets table pagination
   * @type boolean
   * @default false
   */
  @Input() resetPagination: boolean = false;
  /**
   * Columns are displayed as stacked after a certain breakpoint as max-width
   * @type string
   * @default '768px'
   */
  @Input() responsiveBreakPoint: string = '768px';

  /**
   * Event triggered whenever any statefulcomponent is clicked
   * @emits State
   */
  @Output() stateChange: EventEmitter<State> = new EventEmitter();
  /**
   * Event triggered to support external sorting
   * @emits SortEvent
   */
  @Output() customSort: EventEmitter<SortEvent> = new EventEmitter();
  /**
   * Event triggered when row is selected using checkbox
   * @emits any[ ]
   */
  @Output() selectionChange: EventEmitter<Array<any>> = new EventEmitter();
  /**
   * Event triggered if row gets clicked
   * @emits any
   */
  @Output() rowClick: EventEmitter<any> = new EventEmitter();
  /**
   * Event triggered when lazy loading is activated
   * @emits LazyLoadAction
   */
  @Output() onLazyLoad: EventEmitter<LazyLoadAction> = new EventEmitter();

  /* Internal component variables */
  // Access childeren flaged with #caption
  @ContentChild('caption') _caption!: TemplateRef<any>;
  // Access childeren flaged with #summary
  @ContentChild('summary') _summary!: TemplateRef<any>;
  // Access child row expansion
  @ContentChild('expandedRow') _expandedRow!: TemplateRef<any>;
  // Array containg selcted rows objects
  _selectedRows!: Array<any>;
  // Object containing keys for expanding rows
  _expandedKeys: any;
  // Used to reset pagination if resetPagination is true
  _paginationFirstIndex: number = 0;
  //#endregion Declerations

  constructor(private __dataService: DataService) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this.validatePagination();
    this.initSubscribtion();
    this.generateStates();
    this.expandRows();
    this.totalRecords = this.totalRecords
      ? this.totalRecords
      : this.data.length;
  }

  ngOnDestroy(): void {
    this.__dataService.activeState.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['resetPagination']?.currentValue) {
      this._paginationFirstIndex = 0;
    }
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  //Validations on rowsCountPerPage
  validatePagination(): void {
    if (this.rowsPerPageOptions) {
      this.rowsCountPerPage = this.rowsPerPageOptions[0];
    } else if (!this.rowsCountPerPage) {
      this.rowsCountPerPage = 5;
    }
  }
  //Subscribtion to datastate behaviour subject in service to trigger event when any state updates
  initSubscribtion(): void {
    this.__dataService.activeState.subscribe((state: State) => {
      if (state.event) this.stateChange.emit(state);
    });
  }
  // Creates state for stateful columns
  generateStates(): void {
    //Finds columns that have button or switch type to add new state for each
    const states = this.tableColumns.filter(
      (element: TableColumn) =>
        element.type === 'button' ||
        element.type === 'switch' ||
        element.type === 'dropdown'
    );

    // Loops on found objects and creates state for each
    if (states.length > 0) {
      states.forEach((element: TableColumn) => {
        this.__dataService.createState(element);
      });
    }
  }
  // Called once a row is selected using checkbox, then emits selections through event
  onSelectionChange(selected: Array<any>): void {
    this.selectionChange.emit(selected);
  }
  // Called if table row is clicked
  onRowClick(item: any): void {
    this.rowClick.emit(item);
  }
  // Expands all rows
  expandRows(): void {
    if (this.expandedByDefault) {
      this._expandedKeys = {};
      this.data.forEach((item, index) => {
        this._expandedKeys[this.data[index][this.rowExpansionDataKey]] = true;
      });
    }
  }
  // Emits lazy loading pagination event
  lazyLoaded(event: any) {
    this.onLazyLoad.emit({
      ...event,
      currentPage: event.first / event.rows + 1,
    });
  }
  //#endregion Methods
}
