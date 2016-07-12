import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './shared/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate() {
    if (!this.userService.isLoggedIn()) {
      this.userService.login();
      return false;
    }
    return true;
  }
}
