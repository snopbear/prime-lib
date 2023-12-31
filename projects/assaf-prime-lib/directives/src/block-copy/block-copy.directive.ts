import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockCopy]',
  standalone: true,
})
export class BlockCopyDirective {
  //#region Events
  @HostListener('copy', ['$event']) blockCopy(event: KeyboardEvent) {
    event.preventDefault();
  }
  //#endregion events
}
