declare function ga(command: string, type: string);

import {Component, ViewEncapsulation} from '@angular/core';
import {FORM_PROVIDERS, COMMON_DIRECTIVES} from '@angular/common';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';
import { CmsService, HttpService } from './shared';
import { PageComponent, SessionPageComponent } from './page';
import { environment } from './environment';

@Component({
  moduleId: module.id,
  selector: 't3dd16-app',
  providers: [FORM_PROVIDERS, CmsService, HttpService],
  directives: [
    ROUTER_DIRECTIVES, COMMON_DIRECTIVES,
    HeaderComponent, FooterComponent
  ],
  templateUrl: 't3dd16.component.html',
  styleUrls: [
    'styles/scaffolding.css',
    'styles/animation.css',
    'styles/layout.css',
    'styles/type.css',
    'styles/buttons.css',
    'styles/forms.css',
    'styles/table.css',
    'styles/card.css',
    'styles/modal.css',
    'styles/sponsors.css'
  ],
  encapsulation: ViewEncapsulation.None
})
@Routes([
  {path: '/', component: PageComponent},
  {path: '/sessions', component: SessionPageComponent},
  {path: '/:path', component: PageComponent}
])
export class T3DD16AppComponent {

  title: string;

  constructor(router: Router) {
    router.changes.subscribe(() => {
      if (environment.production) {
        ga('send', 'pageview');
      }
    });
  }

}
