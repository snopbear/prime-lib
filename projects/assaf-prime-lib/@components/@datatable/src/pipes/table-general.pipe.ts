import { Pipe, PipeTransform } from '@angular/core';

// Pipe that accepts a callback function & formats input based on it
@Pipe({
  name: 'transformText',
})
export class TransformTextPipe implements PipeTransform {
  transform(value: string | number | Date, logic: Function): string {
    return logic ? logic(value) : value;
  }
}
