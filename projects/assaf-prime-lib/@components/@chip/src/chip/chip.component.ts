import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'assaf-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class AssafChipComponent {
  //#region Declerations
  /**
   * Title Chip
   * @type string
   */
  @Input() title!: string;
  /**
   * Text in the chip
   * @type string
   */
  @Input() label!: string;
  /**
   * Style class of the component.
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * External class for label
   * @type string
   */
  @Input() titleClass!: string;
  /**
   * Sets icon in the chip
   * @type string
   * @example 'pi-facebook'
   */
  @Input() chipIcon!: string;
  /**
   * Display a remove icon.
   * @type boolean
   * @default false
   */
  @Input() removable: boolean = false;
  /**
   * Sets icon that appear for delete
   * @type string
   * @default 'pi-times-circle'
   */
  @Input() removeIcon: string = 'pi-times-circle';
  /**
   * Sets the image to display
   * @type string
   */
  @Input() image!: string;
  /**
   * Event fired when chip remove button is clicked
   */
  @Output() onChipRemove: EventEmitter<void> = new EventEmitter();
  //#endregion Declerations

  //#region Methods
  chipRemoved(event: any): void {
    this.onChipRemove.emit();
  }
  //#endregion Methods
}
