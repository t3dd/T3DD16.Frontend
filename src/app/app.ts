declare function ga(command: string, type: string);

import {Component, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS, COMMON_DIRECTIVES} from 'angular2/common';
import {DefaultPageComponent, SessionPageComponent} from './components/page/pages';

import {NavigationComponent} from './components/navigation/navigation';
import {OffcanvasComponent} from './components/navigation/offcanvas';
import {FooterComponent} from './components/footer/footer';
import {LoginComponent} from './components/login/login';
import {LoadingComponent} from './components/loading/loading';

import {AppStates} from './providers/appStates';
import {States} from './model/states';

@Component({
  selector: 't3dd16-app',
  providers: [...FORM_PROVIDERS],
  directives: [
    ROUTER_DIRECTIVES, COMMON_DIRECTIVES,
    NavigationComponent, OffcanvasComponent,
    LoginComponent, FooterComponent,
    LoadingComponent
  ],
  pipes: [],
  host: {},
  styleUrls: [
    'assets/styles/scaffolding.css',
    'assets/styles/animation.css',
    'assets/styles/layout.css',
    'assets/styles/type.css',
    'assets/styles/buttons.css',
    'assets/styles/forms.css',
    'assets/styles/card.css',
    'assets/styles/modal.css',
    'assets/styles/sponsors.css'
  ],
  templateUrl: 'app/app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  {path: '/', name: 'Page', component: DefaultPageComponent, useAsDefault: true},
  {path: '/session/...', name: 'SessionPage', component: SessionPageComponent},
  {path: '/:path', name: 'Page', component: DefaultPageComponent},
])
export class App {

  states: States;

  constructor(private appStates: AppStates, router: Router) {
    this.states = this.appStates.states;
    //router.subscribe((url) => {
    //  ga('send', 'pageview');
    //});
  }

  toggleOffcanvas() {
    this.appStates.toggleOffcanvas();
  }
}
