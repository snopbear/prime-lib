import { ElementRef } from '@angular/core';

export const getElement = (element: ElementRef) => {
  return element.nativeElement.querySelector('input') || element.nativeElement;
};
