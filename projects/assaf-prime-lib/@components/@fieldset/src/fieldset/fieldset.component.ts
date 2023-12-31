import { FieldSetData } from './../model/fieldset-model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'assaf-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class AssafFieldsetComponent {
  //#region Declerations
  /**
   * Data to configure & view fieldset/s
   * @type FieldSetData | FieldSetData[ ]
   */
  @Input() data!: FieldSetData | Array<FieldSetData>;
  /**
   * External styling class/es
   * @type string
   */
  @Input() styleClass!: string;
  //#endregion Declerations

  //#region Methods
  isArray(): boolean {
    return this.data instanceof Array;
  }
  //#endregion Methods
}
