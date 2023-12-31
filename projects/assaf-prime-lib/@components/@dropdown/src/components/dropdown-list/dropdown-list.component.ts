import { Component, Input } from '@angular/core';
import { DropDownItem, DropDownMode } from '../../models/dropdown-model';

@Component({
  selector: 'assaf-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
})
export class AssafDropdownListComponent {
  //#region declerations
  // Dropdown view mode
  @Input() mode!: DropDownMode;
  // Dropdown object
  @Input() listItem!: DropDownItem;
  // Icon class (used when text-icon mode is set)
  @Input() class: string = '';
  //#endregion declerations

  constructor() {}
}
