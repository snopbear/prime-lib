import {
  AfterContentInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { getElement } from '../utilities';
import { Subject, fromEvent, takeUntil } from 'rxjs';
import { SpecialCharacters } from 'assaf-prime-lib/models';

@Directive({
  selector: '[numberOnly]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberOnlyDirective),
      multi: true,
    },
  ],
})
export class NumberOnlyDirective
  implements ControlValueAccessor, OnInit, OnDestroy, AfterContentInit
{
  //#region Declerations
  private __validationRegex!: RegExp;
  private __inputRef!: HTMLInputElement;
  private __unsubscriber: Subject<void> = new Subject();
  private onTouched!: Function;
  private onChange!: Function;
  /**
   * List of characters to be allowed in validation
   * @type any[ ]
   * @default []
   */
  @Input() specialCharacters: Array<SpecialCharacters> = [];
  /**
   * Enables/disables directive
   * @type boolean
   * @default true
   */
  @Input() enableNumberOnly: boolean = true;
  //#endregion Declerations

  constructor(private __elementRef: ElementRef<HTMLInputElement>) {}

  //#region Life Cycle Hooks
  ngOnInit(): void {
    this.__validationRegex = new RegExp(
      `[^0-9${
        this.specialCharacters.length > 0
          ? '\\' + this.specialCharacters.join('\\')
          : ''
      }\u0660-\u0669]`,
      'g'
    );
  }

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
    if (this.enableNumberOnly) {
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
