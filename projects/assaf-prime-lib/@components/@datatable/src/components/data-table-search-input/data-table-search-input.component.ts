import { Component, Input, OnInit } from '@angular/core';
import { IconPosition } from 'assaf-prime-lib/@components/@input';
import { Table } from 'primeng/table';

@Component({
  selector: 'assaf-data-table-search-input',
  templateUrl: './data-table-search-input.component.html',
  styleUrls: ['./data-table-search-input.component.scss'],
})
export class AssafDataTableSearchInputComponent implements OnInit {
  //#region Declerations
  /**
   * Sets label for input
   * @type string
   */
  @Input() label!: string;
  /**
   * Table template reference, required for the component to work
   * @type Table
   */
  @Input() template!: Table;
  /**
   * Search input placeholder
   * @type string
   * @default 'Global Search'
   */
  @Input() placeholder: string = 'Global Search';
  /**
   * External styling class for input
   * @type string
   */
  @Input() inputStyleClass!: string;
  /**
   * Sets Icon position
   * @type IconPosition
   * @default 'left'
   */
  @Input() iconPos: IconPosition = 'left';
  /**
   * Sets Input icon
   * @type string
   * @default 'pi-search'
   */
  @Input() icon: string = 'pi-search';
  /**
   * Container styling class
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Styleclass for label
   * @type string
   */
  @Input() labelClass!: string;
  //#endregion Declerations

  //#region Life Cycle Hooks
  ngOnInit(): void {
    if (!this.template) {
      throw new Error(
        'Please provide table template to perform global table search'
      );
    }
  }
  //#endregion Life Cycle Hooks
}
