declare function ga(command: string, type: string);

import { Component, ViewEncapsulation } from '@angular/core';
import { FORM_PROVIDERS, COMMON_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

import { HeaderComponent, FooterComponent, SidenavContentComponent } from './layout';
import { CmsService, HttpService } from './shared';
import { environment } from './environment';

@Component({
  moduleId: module.id,
  selector: 't3dd16-root',
  providers: [ FORM_PROVIDERS, CmsService ],
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
export class AppComponent {

  title: string;

  constructor(route: ActivatedRoute) {
    route.url.subscribe((foo) => {
      if (environment.production) {
        ga('send', 'pageview');
      }
    });
  }

}
