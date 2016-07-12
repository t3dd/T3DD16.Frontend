import { Injectable } from '@angular/core';
import { TimerWrapper } from '@angular/compiler/src/facade/async';
import { Subject } from 'rxjs/Rx';

import { HttpService } from './http.service';
import { User } from '../model';
import { environment } from '../index';

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
      this.loggedIn = true;
      this.user$.next(user);
    }, () => {
      this.loggedIn = false;
    })
  }

}
