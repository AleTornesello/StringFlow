import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value?: string | null): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    const capitalizedWords = words.map((word) => {
      const lowercaseWord = word.toLowerCase();
      return `${lowercaseWord.slice(0, 1).toUpperCase()}${lowercaseWord.slice(
        1
      )}`;
    });

    return capitalizedWords.join(' ');
  }
}
