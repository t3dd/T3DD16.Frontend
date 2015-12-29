import {Injectable} from 'angular2/core';
import {Location} from 'angular2/router';
import {Http} from 'angular2/http';

@Injectable()
export class CmsService {

  constructor(private _http: Http, private _location: Location) {
  }

  /**
   * @returns {Observable<R>}
   */
  getContent() {
    return this._http.get('http://t3dd16.dev' + this._location.path() + '/').map(res => res.json());
  }

  /**
   * @returns {Observable<R>}
   */
  getNavigation() {
    return this._http.get('http://t3dd16.dev?type=1450887489').map(res => res.json());
  }

}
