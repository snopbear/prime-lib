import { Component, Input } from '@angular/core';
import { TableColumn } from '../../models/datatable-model';
import { DataService } from '../../services/data.service';

@Component({
  selector: '[assaf-data-table-row]',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.scss'],
})
export class AssafDataTableRowComponent {
  //#region Declerations
  // Array of table column configurations
  @Input() tableColumns!: Array<TableColumn>;
  // Row data object
  @Input() rowItem: any;
  // Current status of expanded row
  @Input() expanded!: boolean;
  // Shows/hides expand button
  @Input() showExpandButton: boolean = false;
  //#endregion Declerations

  constructor(private __dataService: DataService) {}

  //#region Methods
  //Function called on any button click that sends the current row data and the datakey of the clicked button to the service
  valueChanged(event: string): void {
    this.__dataService.modifyState(event, this.rowItem);
  }

  // Checks wether the input data type is array or not
  isArray(value: any): boolean {
    return value instanceof Array;
  }
  //#endregion Methods
}
