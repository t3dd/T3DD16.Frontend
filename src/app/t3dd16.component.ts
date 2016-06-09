import {Component, ViewEncapsulation} from '@angular/core';
import {FORM_PROVIDERS, COMMON_DIRECTIVES} from '@angular/common';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';
import { CmsService, HttpService } from './shared';

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
export class T3DD16AppComponent {

}
