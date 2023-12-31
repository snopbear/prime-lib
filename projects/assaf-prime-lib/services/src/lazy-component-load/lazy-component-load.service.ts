import { ViewContainerRef } from '@angular/core';
import { LazyComponent } from 'assaf-prime-lib/models';

export class LazyComponentLoadService {
  // Internal array holding components to be loaded
  private __components: Array<LazyComponent> = [];

  //#region Methods
  /**
   * Extracts the LazyComponent items from items variable and sets internal array
   * @param items array contain items that must extend LazyComponent interface
   */
  fillComponents(items: Array<any>): void {
    this.__components = items.map((item) => ({
      component: item.component,
      inputs: item.inputs,
    }));
  }
  /**
   * Loads the corresponding component based on index passed in the passed container
   * @param container container to load component in
   * @param index index of component to be loaded in container
   */
  async createComponent(
    container: ViewContainerRef,
    index: number
  ): Promise<void> {
    if (container) {
      container.clear();
    }
    const newComponent = await this.__components[index].component();
    const newComp = container.createComponent(newComponent);
    if (this.__components[index].inputs) {
      Object.entries(this.__components[index].inputs!).forEach((input) => {
        newComp.instance[input[0]] = input[1];
      });
    }
  }
  //#endregion Methods
}
