import { Pipe, PipeTransform } from '@angular/core';

declare module showdown {

  interface ConverterOptions {
    extensions: any[];
  }

  interface Converter {
    makeHtml(text: string): string;
  }

  interface ConverterStatic {
    new(converter_options?: ConverterOptions): Converter;
  }

  let Converter: ConverterStatic;
}

@Pipe({
  name: 'markdown'
})
export class Markdown implements PipeTransform {

  converter: showdown.Converter;

  constructor() {
    this.converter = new showdown.Converter();
  }

  transform(value: any, args?: any): any {
    return this.converter.makeHtml(value);
  }

}
