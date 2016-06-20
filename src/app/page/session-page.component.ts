import { Component, DynamicComponentLoader } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BasePageComponent } from './base-page.component';
import { CmsService } from '../shared';
import { SessionCreateComponent, SessionDetailComponent } from '../session';

@Component({
  selector: 't3dd16-blank-page',
  providers: [],
  template: ''
})
export class BlankPageComponent {
}

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-page',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ Title ],
  templateUrl: 'base-page.component.html',
  styleUrls: [ 'page.component.css' ]
})
@Routes([
  {path: '/', component: BlankPageComponent},
  {path: '/new', component: SessionCreateComponent},
  {path: '/:session', component: SessionDetailComponent}
])
export class SessionPageComponent extends BasePageComponent {

  constructor(protected cms: CmsService, protected dcl: DynamicComponentLoader, protected title: Title) {
    super(cms, dcl, title);
  }

}
