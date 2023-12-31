import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assaf-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class AssafMessagesComponent implements OnInit {
  //#region Declerations
  /**
   * Enables closing the message message
   * @type boolean
   * @default true
   */
  @Input() closable: boolean = true;
  /**
   * External style class for message
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Unique key identifier for message
   * @type string
   */
  @Input() key!: string;
  //#endregion Declerations

  //#region LifeCycle Hooks
  ngOnInit(): void {
    if (!this.key) {
      throw new Error('Please provide unique key for message');
    }
  }
  //#endregion LifeCycle Hooks
}
