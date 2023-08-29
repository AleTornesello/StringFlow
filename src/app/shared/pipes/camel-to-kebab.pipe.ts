import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelToKebab'
})
export class CamelToKebabPipe implements PipeTransform {

  transform(value?: string): string | undefined {
    if (!value) {
      return value;
    }

    return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

}
