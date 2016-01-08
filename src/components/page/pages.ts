import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Title} from 'angular2/platform/browser';
import {CmsService} from './../../providers/cmsService';
import {BasePageComponent} from './base-page';
import {SessionCreateComponent} from '../session/session-create';
import {SessionDetailComponent} from '../session/session-detail';

@Component({
  selector: 'none-page',
  providers: [],
  template: ''
})
export class NoneComponent {
}

@Component({
  selector: 'default-page',
  providers: [Title],
  templateUrl: 'app/components/page/base-page.html'
})
export class DefaultPageComponent extends BasePageComponent {
  constructor (protected _cms: CmsService, protected _title: Title, protected _dcl: DynamicComponentLoader, protected _elementRef: ElementRef) {
    super();
  }
}

@Component({
  selector: 'session-page',
  directives: [RouterOutlet],
  providers: [Title],
  templateUrl: 'app/components/page/base-page.html'
})
@RouteConfig([
  {path: '/', name: 'SessionList', component: NoneComponent},
  {path: '/new', name: 'SessionCreate', component: SessionCreateComponent},
  {path: '/:session', name: 'SessionDetail', component: SessionDetailComponent}
])
export class SessionPageComponent extends BasePageComponent {
  constructor (protected _cms: CmsService, protected _title: Title, protected _dcl: DynamicComponentLoader, protected _elementRef: ElementRef) {
    super();
  }
}
