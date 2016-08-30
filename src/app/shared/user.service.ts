import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { HttpService } from './http.service';
import { User } from '../model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  loggedIn: boolean = false;
  user$: Subject<User>;

  constructor(private http: HttpService) {
    this.user$ = new Subject<User>();
  }

  getUser() {
    this.fetchUser();
    return this.user$.asObservable();
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  login() {
    let popup = window.open(environment.endpoint + 'user/login/');
    let interval = setInterval(() => {
      if (popup == null || popup.closed) {
        clearInterval(interval);
        this.fetchUser();
      }
    }, 200);
  }

  protected fetchUser() {
    this.http.get('user/me.json').subscribe((user: User) => {
      this.loggedIn = true;
      this.user$.next(user);
    }, () => {
      this.loggedIn = false;
    });
  }

}
