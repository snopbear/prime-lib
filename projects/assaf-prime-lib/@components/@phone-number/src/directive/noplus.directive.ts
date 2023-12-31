import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noPlus]',
})
export class NoplusDirective {
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
    ];
    const isNumber = /\d/.test(event.key);
    const isSpace = event.code === 'Space';
    const isHyphen = event.code === 'Minus';
    const isSelectAll =
      event.ctrlKey &&
      (event.key === 'a' ||
        event.key === 'v' ||
        event.key === 'x' ||
        event.key === 'c');

    if (
      !isNumber &&
      !allowedKeys.includes(event.key) &&
      !isSpace &&
      !isHyphen &&
      !isSelectAll
    ) {
      event.preventDefault();
    }
  }
}
