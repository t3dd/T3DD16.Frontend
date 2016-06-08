import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { T3DD16AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(T3DD16AppComponent);

