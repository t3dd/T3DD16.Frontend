import {Component, OnInit} from 'angular2/core';
import {UserService} from '../../providers/userService';
import {User} from '../../model/user';
import {isJsObject} from 'angular2/src/facade/lang';

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

  constructor(private _userService: UserService) {
  }

  ngOnInit(): any {
    this.fetchUser();
  }

  login() {
    if (this.hasUser()) {
      return;
    }

    let popup = window.open('/cms/user/login/');
    popup.onBeforeUnload = () => {
      this.fetchUser();
    };
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
