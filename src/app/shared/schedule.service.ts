import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../model/session';
import { HttpService } from './http.service';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpService) {
  }

  get(): Observable<Session[]> {
    return this.http.get('schedule.json');
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
    return this.http.post('schedule.json', session);
  }

}
