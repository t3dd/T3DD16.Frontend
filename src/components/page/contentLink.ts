import {Directive} from 'angular2/core';
import {isString} from 'angular2/src/facade/lang';

import {Router} from 'angular2/router';

@Directive({
  selector: 'a[href]',
  inputs: ['href: href'],
  host: {
    '(click)': 'onClick()'
  }
})
export class ContentLink {
  href: string;

  constructor (private _router: Router) {
  }

  onClick (): boolean {
    if (isString(this.href) && this._isInternalLink(this.href)) {
      this._router.navigateByUrl(this.href);
      return false;
    }
    return true;
  }

  private _isInternalLink (link: string): boolean {
    if (link.indexOf('mailto') !== -1) {
      return false;
    } else if (link.indexOf('http') !== -1) {
      return false;
    }
    return true;
  }
}
