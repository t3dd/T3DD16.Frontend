import { Pipe, PipeTransform } from '@angular/core';
import { Converter } from 'showdown';

@Pipe({
  name: 'markdown'
})
export class Markdown implements PipeTransform {

  converter: Converter;

  constructor() {
    this.converter = new Converter();
  }

  transform(value: any, args?: any): any {
    return this.converter.makeHtml(value);
  }

}
