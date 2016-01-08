/// <reference path="../../typings/showdown/showdown.d.ts" />
import {CONST} from 'angular2/src/facade/lang';
import {Injectable, PipeTransform, Pipe} from 'angular2/core';

@CONST()
@Pipe({name: 'markdown', pure: false})
@Injectable()
export class MarkdownPipe implements PipeTransform {

  _converter: any;

  constructor() {
    this._converter = new showdown.Converter();
  }

  transform (value: any, args: any[] = null): string {
    return this._converter.makeHtml(value);
  }
}

