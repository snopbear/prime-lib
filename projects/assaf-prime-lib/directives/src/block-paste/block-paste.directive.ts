import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockPaste]',
  standalone: true,
})
export class BlockPasteDirective {
  //#region Events
  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    event.preventDefault();
  }
  //#endregion Events
}
