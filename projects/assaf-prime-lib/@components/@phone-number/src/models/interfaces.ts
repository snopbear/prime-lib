import { ValidatorFn } from '@angular/forms';
import { CountryCode } from './country-code';

export interface Country {
  name: string;
  flag: string;
  code: CountryCode;
  dial_code: string;
  pattern: RegExp;
  placeholder: string;
  id: number;
  validator?: ValidatorFn;
  patternInput?: RegExp;
}
