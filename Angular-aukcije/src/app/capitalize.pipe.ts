import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown): string {
    if (typeof value !== 'string') {
      return ''; 
    }

    
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
