import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) {
  }

  /**
   * @returns {Observable}
   */
  getUser() {
    return this._http.get('/cms/user/me.json').map(res => res.json());
  }

  login() {
    return this._http.get('/cms/user/login').map(res => res.json());
  }

  /**
   * @returns {Observable}
   */
  logout() {
    return this._http.get('/cms/user/logout.json').map(res => res.json());
  }

}
