import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[minMax]',
  standalone: true,
})
export class MinMaxDirective {
  @Input() minVal!: number;

  @Input() maxVal!: number;

  constructor(private ref: ElementRef) {}

  @HostListener('input', ['$event'])
  public onInput(): void {
    let val = parseInt(this.ref.nativeElement.value);
    if (
      this.maxVal !== null &&
      this.maxVal !== undefined &&
      val >= this.maxVal
    ) {
      this.ref.nativeElement.value = this.maxVal.toString();
    } else if (
      this.minVal !== null &&
      this.minVal !== undefined &&
      val <= this.minVal
    ) {
      this.ref.nativeElement.value = this.minVal.toString();
    }
  }
}
