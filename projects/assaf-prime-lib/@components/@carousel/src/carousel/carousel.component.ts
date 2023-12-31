import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import {
  CarouselOrientation,
  CarouselResponsiveOption,
} from '../models/carousel.model';

@Component({
  selector: 'assaf-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class AssafCarouselComponent {
  //#region Declerations
  /**
   * Defines if scrolling would be infinite.
   * @type boolean
   * @default false
   */
  @Input() circular: boolean = false;
  /**
   * Set number of items to scroll
   * @type number
   * @default 1
   */
  @Input() numScroll: number = 1;
  /**
   * Set number of items per page.
   * @type number
   */
  @Input() numVisible!: number;
  /**
   * Data to be looped on
   * @type any[ ]
   * @default []
   */
  @Input() data: Array<any> = [];
  /**
   * Set Time in milliseconds to scroll items automatically.
   * @type number
   */
  @Input() autoplayInterval!: number;
  /**
   * Set An array of options for responsive design.
   * @type CarouselResponsiveOption[ ]
   */
  @Input() responsiveOptions!: Array<CarouselResponsiveOption>;
  /**
   * Sets carousel orientation
   * @type CarouselOrientation
   * @default 'horizontal'
   */
  @Input() orientation: CarouselOrientation = 'horizontal';
  /**
   * Set Height of the viewport in vertical layout.
   * @type string
   */
  @Input() verticalViewPortHeight!: string;
  /**
   * External style class for caeousel container
   * @type string
   */
  @Input() styleClass!: string;
  /**
   * Shows indecators below carousel
   * @type boolean
   * @default false
   */
  @Input() showIndicators: boolean = false;
  /**
   * Shows navigator buttons
   * @type boolean
   * @default true
   */
  @Input() showNavigators: boolean = true;
  /**
   * Indicators content style class
   * @type string
   */
  @Input() indicatorsContentClass!: string;
  /**
   * Indicators style class
   * @type string
   */
  @Input() indicatorStyleClass!: string;

  // Acces children content
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  //#endregion Declerations
}
