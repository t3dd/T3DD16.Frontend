import {Injectable} from 'angular2/core';
import {Location} from 'angular2/router';
import {Http} from 'angular2/http';

@Injectable()
export class CmsService {

  constructor(private _http: Http, private _location: Location) {
  }

  /**
   * @returns {Observable}
   */
  getContent() {
    return this._http.get('/cms' + this._location.path() + '/').map(res => res.json());
  }

  /**
   * @returns {Observable}
   */
  getNavigation() {
    return this._http.get('/cms/?type=1450887489').map(res => res.json());
  }

}
