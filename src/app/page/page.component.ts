import { Component, DynamicComponentLoader } from '@angular/core';
import { BasePageComponent } from './base-page.component';
import { Title } from '@angular/platform-browser';
import { CmsService } from '../shared/cms-service.service';

@Component({
  moduleId: module.id,
  selector: 't3dd16-page',
  providers: [Title],
  templateUrl: 'base-page.component.html',
  styleUrls: ['page.component.css']
})
export class PageComponent extends BasePageComponent {

  constructor(protected cms: CmsService, protected dcl: DynamicComponentLoader, protected title: Title) {
    super(cms, dcl, title);
  }

}
