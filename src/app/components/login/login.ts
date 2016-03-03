import {Component, OnInit} from 'angular2/core';
import {TimerWrapper} from 'angular2/src/facade/async';
import {UserService} from '../../providers/userService';
import {User} from '../../model/user';
import {ConfigService} from '../../providers/configService';

@Component({
  selector: 'login',
  directives: [],
  pipes: [],
  providers: [UserService],
  styleUrls: ['assets/styles/login.css'],
  templateUrl: 'app/components/login/login.html'
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private _userService: UserService, private config: ConfigService) {
  }

  ngOnInit(): any {
    this.fetchUser();
  }

  login() {
    if (this.hasUser()) {
      return;
    }

    let popup = window.open(this.config.get('restPrefix') + 'user/login/');
    let interval = TimerWrapper.setInterval(() => {
      if (popup == null || popup.closed) {
        TimerWrapper.clearInterval(interval);
        this.fetchUser();
      }
    }, 200);
  }

  /**
   * @returns {boolean}
   */
  hasUser() {
    return this.user && this.user.username;
  }

  protected fetchUser() {
    this._userService.getUser().subscribe(
      res => this.user = res,
      error => console.log(error)
    );
  }

}
