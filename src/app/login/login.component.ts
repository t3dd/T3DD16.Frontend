import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../shared';
import { User } from '../model';

@Component({
  selector: 't3dd16-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  user$: Observable<User>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }

  login() {
    this.userService.login();
  }

}
