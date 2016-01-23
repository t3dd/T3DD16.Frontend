import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppStates} from './app/providers/appStates';
import {CmsService} from './app/providers/cmsService';
import {HttpCache} from './app/providers/httpCache';
import {App} from './app/app';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AppStates,
  CmsService,
  HttpCache
]);
