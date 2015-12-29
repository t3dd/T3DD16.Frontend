import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {PageComponent} from './components/page/page';
import {NavigationComponent} from './components/navigation/navigation';

@Component({
  selector: 't3dd16-app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, NavigationComponent],
  pipes: [],
  host: {},
  styleUrls: [
    './css/scaffolding.css',
    './css/layout.css',
    './css/type.css',
    './css/buttons.css',
    './css/card.css',
    './css/sponsors.css'
  ],
  templateUrl: './templates/app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  {path: '/:path', name: 'Page', component: PageComponent}
])
export class App {
}
