import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {PageComponent} from './components/page/page';
import {NavigationComponent} from './components/navigation/navigation';
import {OffcanvasComponent} from './components/navigation/offcanvas';
import {AppStates} from './providers/appStates';
import {States} from './model/states';

@Component({
  selector: 't3dd16-app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES, NavigationComponent, OffcanvasComponent],
  pipes: [],
  host: {},
  styleUrls: [
    'assets/styles/scaffolding.css',
    'assets/styles/layout.css',
    'assets/styles/type.css',
    'assets/styles/buttons.css',
    'assets/styles/card.css',
    'assets/styles/sponsors.css'
  ],
  templateUrl: 'app/app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  {path: '/:path', name: 'Page', component: PageComponent}
])
export class App {

  states: States;

  constructor(private _AppStates: AppStates) {
    this.states = this._AppStates.states;
  }

  toggleOffcanvas() {
    this._AppStates.toggleOffcanvas();
  }
}
