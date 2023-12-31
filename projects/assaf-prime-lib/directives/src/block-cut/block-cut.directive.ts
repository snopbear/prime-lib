import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockCut]',
  standalone: true,
})
export class BlockCutDirective {
  //#region Events
  @HostListener('cut', ['$event']) blockCut(event: KeyboardEvent) {
    event.preventDefault();
  }
  //#endregion Events
}
