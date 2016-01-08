import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Session} from '../model/session';

@Injectable()
export class SessionService {

  protected _sessions: Session[];
  protected headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  get() {
    // @TODO Add cache
    return this.http.get('/cms/session.json', {headers: this.headers}).map(res => res.json());
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
    return this.http.post('/cms/session.json', JSON.stringify(session), {headers: this.headers}).map(res => res.json());
  }

}
