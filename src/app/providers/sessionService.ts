import {Injectable} from 'angular2/core';
import {Session} from '../model/session';
import {HttpCache} from './httpCache';

@Injectable()
export class SessionService {

  constructor(private http: HttpCache) {
  }

  get() {
    return this.http.get('sessions.json');
  }

  getByPath(path) {
    return this.get()
      .map((res) => {
        return res.filter((session) => {
          return session.links.self.indexOf(path) !== -1;
        })[0];
      });
  }

  create(session: Session) {
    return this.http.post('sessions.json', session);
  }

}
