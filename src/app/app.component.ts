declare function ga(command: string, type: string);

import { Component, ViewEncapsulation } from '@angular/core';
import { FORM_PROVIDERS, COMMON_DIRECTIVES } from '@angular/common';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

import { HeaderComponent, FooterComponent, SidenavContentComponent } from './layout';
import { CmsService, HttpService } from './shared';
import { PageComponent, SessionPageComponent } from './page';
import { environment } from './environment';

@Component({
  moduleId: module.id,
  selector: 't3dd16-root',
  providers: [ FORM_PROVIDERS, CmsService, HttpService ],
  directives: [
    ROUTER_DIRECTIVES, COMMON_DIRECTIVES, MD_SIDENAV_DIRECTIVES,
    HeaderComponent, FooterComponent, SidenavContentComponent
  ],
  templateUrl: 'app.component.html',
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
export class AppComponent {

  title: string;

  constructor(router: Router) {
    router.changes.subscribe(() => {
      if (environment.production) {
        ga('send', 'pageview');
      }
    });
  }

}
