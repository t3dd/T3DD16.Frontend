import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS, AppComponent, AuthGuard, environment } from './app';
import { UserService, HttpService, VoteService } from './app/shared';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  HttpService,
  AuthGuard,
  UserService,
  VoteService,
]);

