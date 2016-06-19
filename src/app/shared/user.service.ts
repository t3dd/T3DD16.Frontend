import { Injectable } from '@angular/core';
import { TimerWrapper } from '@angular/compiler/src/facade/async';
import { Observable, Subject } from 'rxjs/Rx';

import { HttpService } from './http.service';
import { User } from '../model';
import { environment } from '../index';

@Injectable()
export class UserService {

  user$: Subject<User>;

  constructor(private http: HttpService) {
    this.user$ = new Subject<User>();
    this.fetchUser();
  }

  getUser() {
    return this.user$.asObservable();
  }

  hasUser() {
  }

  login() {
    let popup = window.open(environment.endpoint + 'user/login/');
    let interval = TimerWrapper.setInterval(() => {
      if (popup == null || popup.closed) {
        TimerWrapper.clearInterval(interval);
        this.fetchUser();
      }
    }, 200);
  }

  logout() {
  }

  protected fetchUser() {
    this.http.get('user/me.json').subscribe((user: User) => {
      this.user$.next(user);
    }, () => {})
  }

}
