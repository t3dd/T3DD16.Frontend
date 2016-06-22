import { Directive, Input } from '@angular/core';
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
  selector: 'a[href]',
  host: {
    '(click)': 'onClick()'
  }
})
export class ContentLink {
  @Input() href: string;
  @Input() target: string;

  constructor(private router: Router) {
  }

  onClick(): boolean {
    if (this.target !== '_blank' && isString(this.href) && isInternalLink(this.href)) {
      this.router.navigateByUrl(this.href.replace (/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1'));
      return false;
    }
    return true;
  }
}
