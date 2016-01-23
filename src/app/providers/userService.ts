import {Injectable} from 'angular2/core';
import {HttpCache} from './httpCache';

@Injectable()
export class UserService {

  constructor(private http: HttpCache) {
  }

  getUser() {
    return this.http.get('/cms/user/me.json');
  }

  login() {
    return this.http.get('/cms/user/login');
  }

  logout() {
    return this.http.get('/cms/user/logout.json');
  }

}
