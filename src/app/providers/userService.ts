import {Injectable} from 'angular2/core';
import {HttpCache} from './httpCache';

@Injectable()
export class UserService {

  constructor(private http: HttpCache) {
  }

  getUser() {
    return this.http.get('user/me.json');
  }

  login() {
    return this.http.get('user/login');
  }

  logout() {
    return this.http.get('user/logout.json');
  }

}
