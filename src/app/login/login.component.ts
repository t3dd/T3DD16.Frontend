import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UserService } from '../shared';
import { SpeakerImageComponent } from '../session/speaker-image';
import { User } from '../model';

@Component({
  moduleId: module.id,
  selector: 't3dd16-login',
  directives: [SpeakerImageComponent],
  providers: [UserService],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
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
