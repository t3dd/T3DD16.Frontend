import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

function isInternalLink(link: string): boolean {
  if (link.indexOf('mailto') !== -1) {
    return false;
  } else if (link.indexOf('http') !== -1) {
    return false;
  }
  return true;
}

@Directive({
  selector: 'a[href]'
})
export class ContentLinkDirective {
  @Input() href: string;
  @Input() target: string;

  constructor(private router: Router) {
  }

  @HostListener('click')
  onClick(): boolean {
    if (this.target !== '_blank' && isString(this.href) && isInternalLink(this.href)) {
      this.router.navigateByUrl(this.href.replace (/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1').replace(/^\/|\/$/g, ''));
      return false;
    }
    return true;
  }
}
