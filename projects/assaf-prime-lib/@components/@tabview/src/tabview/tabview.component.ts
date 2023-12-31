import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LazyComponentLoadService } from 'assaf-prime-lib/services';
import { TabViewItem } from '../models/tabview-model';

// References:
// - https://www.youtube.com/watch?v=n2uXyzqL1lA
// - https://developer.okta.com/blog/2021/12/08/angular-dynamic-components
// - https://www.guschlbauer.dev/angular-dynamically-load-componens/
// - https://angular.io/guide/dynamic-component-loader
@Component({
  selector: 'assaf-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss'],
  providers: [LazyComponentLoadService],
})
export class AssafTabviewComponent implements OnInit, AfterViewInit {
  //#region Declerations
  /**
   * Tabview items to looped on
   * @type TabViewItem[ ]
   * @default []
   */
  @Input() items: Array<TabViewItem> = [];
  /**
   * External style class for tab view
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Event triggered when tab is clicked
   */
  @Output() onIndexChange: EventEmitter<number> = new EventEmitter();

  /* Internal component variables */
  // Used to acces container in template
  @ViewChild('container', { read: ViewContainerRef })
  _container!: ViewContainerRef;
  //#endregion Declerations

  constructor(private __lazyLoadComponent: LazyComponentLoadService) {}

  //#region LifeCycle Hooks
  // Fills the internal service array
  ngOnInit(): void {
    this.__lazyLoadComponent.fillComponents(this.items);
  }
  // Sets the container to load the first item of the array
  ngAfterViewInit(): void {
    this.__lazyLoadComponent.createComponent(this._container, 0);
  }
  //#endregion LifeCycle Hooks

  //#region Methods
  // Called whenever a new tab is clicked
  indexChange(newIndex: number): void {
    this.__lazyLoadComponent.createComponent(this._container, newIndex);
    this.onIndexChange.emit(newIndex);
  }
  //#endregion Methods
}
