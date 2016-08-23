import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFix'
})
export class DateFixPipe implements PipeTransform {

  transform(value: string) {
    let values = value.split(':');
    if (values.length === 3) {
      values.shift();
    }
    return values.join(':');
  }
}
