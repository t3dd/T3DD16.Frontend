import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizationService) {
  }

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}
