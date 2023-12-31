export declare type CarouselOrientation = 'horizontal' | 'vertical';

export interface CarouselResponsiveOption {
  /**
   * Specifies the breakpoint to apply modification for
   * @type string
   */
  breakpoint: string;
  /**
   * Number of visible cards
   * @type number
   */
  numVisible: number;
  /**
   * Number of scroll dots
   * @type number
   */
  numScroll: number;
}
