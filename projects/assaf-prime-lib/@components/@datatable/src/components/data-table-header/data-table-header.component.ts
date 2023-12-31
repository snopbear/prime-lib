import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/datatable-model';

@Component({
  selector: '[assaf-data-table-header]',
  templateUrl: './data-table-header.component.html',
  styleUrls: ['./data-table-header.component.scss'],
})
export class AssafDataTableHeaderComponent {
  //#region Declerations
  // Array of columns configuration
  @Input() columns: Array<TableColumn> = [];
  // Shows/hides expand button
  @Input() showExpandButton: boolean = false;
  //#endregion Declerations
}
