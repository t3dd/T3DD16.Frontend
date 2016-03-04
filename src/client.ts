import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {provide, enableProdMode, ComponentRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppStates} from './app/providers/appStates';
import {CmsService} from './app/providers/cmsService';
import {HttpCache} from './app/providers/httpCache';
import {ConfigService} from './app/providers/configService';
import {App} from './app/app';
import {appInjector} from './app/appInjector';
import {UserService} from './app/providers/userService';

let isProduction = window.location.href.indexOf('t3dd16.typo3.org') !== -1;

if (isProduction) {
  enableProdMode();
}

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AppStates,
  CmsService,
  HttpCache,
  ConfigService,
  UserService,
  provide('externalConfig', {
    useValue: {
      production: isProduction,
      restPrefix: isProduction ? '/' : '/cms/'
    }
  })
]).then((appRef: ComponentRef) => {
  // store a reference to the application injector
  appInjector(appRef.injector);
});
