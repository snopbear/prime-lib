import { Type } from '@angular/core';

export interface LazyComponent {
  /**
   * Callback for component import
   * @type Function
   * @example
   * component: () => import('../component').then(comp => comp.TestComponent)
   * @description imported component must be standalone to be lazily imported
   */
  component(): Promise<Type<any>>;
  /**
   * Object that contains all key value pairs for inputs that are required for this component
   * @type Object
   * @example
   * Assume that we have a component with input name
   * Input() name!:string
   *
   * Accordingly the attribute should be passed like this
   *
   * inputs:{
   *    name: "Karim"
   * }
   */
  inputs?: Object;
}
