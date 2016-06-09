import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { T3DD16AppComponent, environment } from './app/';

import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(T3DD16AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
]);

