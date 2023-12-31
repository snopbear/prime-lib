import { Pipe, PipeTransform } from '@angular/core';

// Pipe that accepts a callback function & formats input based on it
@Pipe({
  name: 'conditionalStyle',
})
export class ConditionalStylePipe implements PipeTransform {
  transform(value: any, logic: Function): string {
    return logic ? logic(value) : '';
  }
}
