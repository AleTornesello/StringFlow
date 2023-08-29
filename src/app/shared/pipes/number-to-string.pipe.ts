import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToString'
})
export class NumberToStringPipe implements PipeTransform {

  transform(value: number, radix: number = 10): string {
    if(value === null || value === undefined) {
      return '';
    }

    return value.toString(10);
  }

}
