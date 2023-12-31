import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

import {
  DropDownItem,
  DropDownMode,
  MultiMode,
} from '../../models/dropdown-model';
import { Subject, takeUntil } from 'rxjs';
import { FormInputErrorModes, FormInputErrors } from 'assaf-prime-lib/models';

@Component({
  selector: 'assaf-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class AssafDropdownComponent implements OnInit, OnDestroy {
  //#region declerations
  /**
   * Sets input label text
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets input placeholder text
   * @type string
   * @default 'Select Item'
   */
  @Input() placeholder: string = 'Select Item';
  /**
   * Shows clear selected item button
   * @type boolean
   * @default false
   */
  @Input() showClear: boolean = false;
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null. (works with normal dropdown only)
   * @type boolean
   * @default false
   */
  @Input() autoDisplayFirst: boolean = false;
  /**
   * Enables search bar in dropdown
   * @type boolean
   * @default false
   */
  @Input() enableFilter: boolean = false;
  /**
   * Data to be viewed & selected in component
   * @type DropDownItem[ ]
   * @default []
   */
  @Input() data: Array<DropDownItem> = [];
  /**
   * Form control name for data binding (need to be provided otherwise an exception is thrown)
   * @type string
   */
  @Input() controlName!: string;
  /**
   * Enables multi-select dropdown
   * @type boolean
   * @default false
   */
  @Input() multiSelect: boolean = false;
  /**
   * Sets dropdown display mode
   * @type DropDownMode
   */
  @Input() mode!: DropDownMode;
  /**
   * Sets flag icons to rounded (takes effect only in text-flag mode)
   * @type boolean
   * @default false
   */
  @Input() roundedFlagIcon: boolean = false;
  /**
   * Changes multi-selction dropdown mode (takes effect only when multiSelect is enabled)
   * @type MultiMode
   */
  @Input() multiSelectMode!: MultiMode;
  /**
   * Adds support for autocomplete when user types in field
   * @type boolean
   * @default false
   */
  @Input() autoComplete: boolean = false;
  /**
   * Displays label as floating label above input
   * @type boolean
   * @default false
   */
  @Input() floatLabel: boolean = false;
  /**
   * Control errors messages
   * @type FormInputErrors
   */
  @Input() controlErrors!: FormInputErrors;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External styling class for label (not when floatLabel is active)
   * @type string
   */
  @Input() labelClass!: string;
  /**
   * Text to display when there is no data
   * @type string
   * @default 'No records found'
   */
  @Input() emptyMessage: string = 'No records found';
  /**
   * Text to display when filtering does not return any results
   * @type string
   * @default 'No results found'
   */
  @Input() emptyFilterMessage: string = 'No results found';

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  /* Internal component variables */
  _form!: FormGroup;
  // Currently selected dropdown object (used to set view)
  _selectedItem!: DropDownItem;
  // Currently selected dropdown object (used to set view), applies in multiselect
  _selectedItems: Array<DropDownItem> = [];
  // Filter result objects (used when autoComplete is enabled)
  _filteredResults: Array<DropDownItem> = [];
  // Activates multi mode for autocomplete
  _multiAutoComplete: boolean = false;
  // This array is added as a workaround for the issue below, if resolved please update.
  // https://github.com/angular/angular/issues/46867
  _errorKeys: Array<FormInputErrorModes> = [];
  // Unsubscriber for observables.
  _subscriptionSubject: Subject<void> = new Subject();
  //#endregion declerations

  constructor(private __formDir: FormGroupDirective) {}

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._form = this.__formDir.control;
    this.subscribeFormChange();

    // If autocomplete is activated it disables multiSelect to avoid wrong rendering
    if (this.autoComplete && this.multiSelect) {
      this.multiSelect = false;
      this._multiAutoComplete = true;
    }
    this.hasControlName();
    this.getKeys();
    this.findSelected();
  }
  ngOnDestroy(): void {
    this._subscriptionSubject.next();
    this._subscriptionSubject.complete();
  }
  // ngOnChanges(): void {
  //   if (this.__formDir) {
  //     this.findSelected();
  //   }
  // }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Fills _errorKeys with controlErrors keys
  getKeys(): void {
    if (this.controlErrors) {
      this._errorKeys = Object.keys(
        this.controlErrors
      ) as Array<FormInputErrorModes>;
    }
  }
  // Check controlName value
  hasControlName(): void {
    if (!this.controlName) {
      throw new Error('Reactive form detected please provide controlName');
    }
  }
  // Sets _selectedItem to the selected object to be viewed
  changed(item: any): void {
    this._selectedItem = this.data.find(
      (element: DropDownItem) => element.value === item.value
    )!;
    this.valueChange.emit(item);
  }
  // Filters array based on user input
  search(event: { originalEvent: Event; query: string }): void {
    this._filteredResults = this.data.filter((item) =>
      item.key.toLowerCase().includes(event.query.toLowerCase())
    );
  }
  // If formcontrol has inital value this method finds the object that matches the value in form control & sets _selectedItem
  findSelected(): void {
    if (this._form?.controls[this.controlName]?.value) {
      this._selectedItem = this.data.find(
        (item) => item.value === this._form.controls[this.controlName].value
      )!;
    }
  }
  // Update UI with selected item.
  subscribeFormChange(): void {
    this._form.controls[this.controlName].valueChanges
      .pipe(takeUntil(this._subscriptionSubject))
      .subscribe((v) => {
        this.findSelected();
      });
  }
  //#endregion Methods
}
