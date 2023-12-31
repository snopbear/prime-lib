import { DatePipe, DecimalPipe } from '@angular/common';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PipesService {
  //#region Constructor
  constructor(
    @Optional() private __datePipe: DatePipe,
    @Optional() private __decimalPipe: DecimalPipe
  ) {}
  //#endregion Constructor

  //#region Methods
  /**
   * Converts number to string with comma seperations
   * @param value value to be converted
   */
  number(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  /**
   * Concats % sign to the end of value
   * @param value value to be converted
   */
  percentage(value: number | string): string {
    return `${value} %`;
  }
  /**
   * Converts value to uppercase letters
   * @param value value to be converted
   */
  upperCase(value: string): string {
    return value.toUpperCase();
  }
  /**
   * Converts value to lowercase letters
   * @param value value to be converted
   */
  lowerCase(value: string): string {
    return value.toLowerCase();
  }
  /**
   * Converts value to date format
   * @param value value to be converted
   * @param format date format to be converted to (follow this url: https://angular.io/api/common/DatePipe)
   * @param timezone sets time format for date conversion
   * @param locale will format a value according to locale rules (ex: 'en-US')
   */
  date(
    value: Date | string,
    format?: string,
    timezone?: string,
    locale?: string
  ): string {
    return this.__datePipe.transform(value, format, timezone, locale)!;
  }
  /**
   * Converts value to decimal format
   * @param value value to be converted
   * @param digitsInfo decimal format to be converted to use in this specific format ({minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} ex: '1.1-2')
   * @param locale will format a value according to locale rules (ex: 'en-US')
   */
  decimal(
    value: number | string,
    digitsInfo?: string,
    locale?: string
  ): string {
    return this.__decimalPipe.transform(value, digitsInfo, locale)!;
  }
  //#endregion Methods
}
