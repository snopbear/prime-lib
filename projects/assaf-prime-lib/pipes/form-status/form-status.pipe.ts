import { Pipe, PipeTransform } from '@angular/core';
import { FormControlStatus } from '@angular/forms';

@Pipe({
  name: 'formStatus',
  standalone: true,
})
export class FormStatusPipe implements PipeTransform {
  transform(
    value: FormControlStatus | null,
    validator?: FormControlStatus
  ): boolean {
    return value === validator;
  }
}
