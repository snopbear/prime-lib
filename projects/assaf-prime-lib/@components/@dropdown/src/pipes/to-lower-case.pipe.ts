import { Pipe, PipeTransform } from '@angular/core';

// Pipe that gets the first two letters from country to set flag class to view flag icon
@Pipe({
  name: 'getFlag',
})
export class GetFlagPipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().substring(0, 2);
  }
}
