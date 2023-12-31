import {
  Directive,
  Input,
  ElementRef,
  AfterContentInit,
  OnDestroy,
  forwardRef,
} from '@angular/core';
import { getElement } from '../utilities';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Directive({
  selector: '[englishOnly]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnglishOnlyDirective),
      multi: true,
    },
  ],
})
export class EnglishOnlyDirective
  implements ControlValueAccessor, AfterContentInit, OnDestroy
{
  //#region Declerations
  private __validationRegex: RegExp = /[^A-Za-z0-9\s]/g;
  private __inputRef!: HTMLInputElement;
  private __unsubscriber: Subject<void> = new Subject();
  private onTouched!: Function;
  private onChange!: Function;
  /**
   * Enables/disables directive
   * @type boolean
   * @default true
   */
  @Input() englishOnly: boolean = true;
  //#endregion Declerations

  constructor(private __elementRef: ElementRef<HTMLInputElement>) {}

  //#region Life Cycle Hooks
  ngAfterContentInit(): void {
    this.__inputRef = getElement(this.__elementRef);
    this.subscribeToEvent();
  }

  ngOnDestroy(): void {
    this.__unsubscriber.complete();
    this.__unsubscriber.unsubscribe();
  }
  //#endregion Life Cycle Hooks

  //#region Methods
  private validateInput(event: any): void {
    this.onTouched();
    if (this.englishOnly) {
      const initialValue = event.target.value;
      event.target.value = initialValue.replace(this.__validationRegex, '');
      if (initialValue !== event.target.value) {
        event.stopPropagation();
      }
    }
    this.onChange(event.target.value);
  }

  private subscribeToEvent(): void {
    fromEvent(this.__inputRef, 'input')
      .pipe(takeUntil(this.__unsubscriber))
      .subscribe((event: any) => {
        this.validateInput(event);
      });
  }

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  //#endregion Methods
}
