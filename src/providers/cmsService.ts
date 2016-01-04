import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class CmsService {

  constructor(private _http: Http) {
  }

  /**
   * @returns {Observable}
   */
  getContent(url: string) {
    return this._http.get('/cms/' + url + '/').map(res => res.json());
  }

  /**
   * @returns {Observable}
   */
  getNavigation() {
    return this._http.get('/cms/?type=1450887489').map(res => res.json());
  }

}
