import {Injectable} from '@angular/core';
import {Session} from '../model';
import {HttpService} from './http.service';

@Injectable()
export class VoteService {

  constructor(private http: HttpService) {
  }

  get() {
    return this.http.get('sessions/votes.json');
  }

  create(session: Session) {
    return this.http.post('sessions/votes.json', {session: session.__identity});
  }

  delete(session: Session) {
    return this.http.delete(`sessions/votes.json?session=${session.__identity}`);
  }

}
