import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avoidEmptyValue'
})
export class AvoidEmptyValuePipe implements PipeTransform {

  transform(value: any, replace: string = "-"): unknown {
    if(value === undefined || value === null || value === '') {
      return replace;
    }

    return value;
  }

}
