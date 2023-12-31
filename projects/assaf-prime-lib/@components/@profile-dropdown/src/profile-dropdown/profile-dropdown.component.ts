import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'assaf-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
})

// References:
// https://stackoverflow.com/questions/51150422/how-to-detect-click-outside-of-an-element-in-angular
export class AssafProfileDropdownComponent {
  //#region Declerations
  /**
   * Sets text to be displayed on button
   * @type string
   */
  @Input() label!: string;
  /**
   * Sets button icon
   * @type string
   */
  @Input() icon!: string;
  /**
   * Sets profile image
   * @type string
   */
  @Input() image!: string;
  /**
   * Array of items to be displayed in menu
   * @type MenuItem[ ]
   * @default []
   */
  @Input() menuItems: Array<MenuItem> = [];
  /**
   * External styling class for button
   * @type string
   */
  @Input() buttonStyleClass!: string;
  /**
   * External styling class for menu
   * @type string
   */
  @Input() menuStyleClass!: string;
  /**
   * Sets z-index for menu
   * @type number
   * @default 5
   */
  @Input() zIndex: number = 5;

  /* Internal component variables */
  // Reference for toggle button
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  // Flg to change button icon
  _toggleIcon: boolean = false;
  //#endregion Declerations

  //#region Constructor
  constructor(private __renderer: Renderer2) {
    this.__renderer.listen('window', 'click', (event: Event) => {
      if (!this.toggleButton.nativeElement.contains(event.target)) {
        this._toggleIcon = false;
      }
    });
  }
  //#endregion Constructor

  //#region Methods
  // Changes _toggleIcon value on button click
  changeIcon() {
    const timer = setTimeout(() => {
      this._toggleIcon = !this._toggleIcon;
      clearTimeout(timer);
    }, 50);
  }
  //#endregion Methods
}
