import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormat'
})
export class StringFormatPipe implements PipeTransform {

  // takes an array of strings and formats them with a string containing {0}
  transform(value: Array<string>, formatStr: string): Array<string> {
    return value.map(a => formatStr.replace('{0}', a));
  }
}
