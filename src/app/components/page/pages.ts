import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
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
  providers: [],
  templateUrl: 'app/components/page/base-page.html'
})
export class DefaultPageComponent extends BasePageComponent {
  constructor(protected _cms: CmsService, protected _dcl: DynamicComponentLoader, protected _elementRef: ElementRef) {
    super();
  }
}

@Component({
  selector: 'session-page',
  directives: [RouterOutlet],
  providers: [],
  templateUrl: 'app/components/page/base-page.html'
})
@RouteConfig([
  {path: '/', name: 'SessionList', component: NoneComponent},
  {path: '/new', name: 'SessionCreate', component: SessionCreateComponent},
  {path: '/:session', name: 'SessionDetail', component: SessionDetailComponent}
])
export class SessionPageComponent extends BasePageComponent {
  constructor(protected _cms: CmsService, protected _dcl: DynamicComponentLoader, protected _elementRef: ElementRef) {
    super();
  }
}
