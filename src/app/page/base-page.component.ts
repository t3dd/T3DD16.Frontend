import { Component, DynamicComponentLoader, ViewContainerRef, ViewChild } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CmsService } from '../shared/cms-service.service';
import { ContentLink } from '../content-link.directive';
import { SessionListComponent } from '../session';

export interface ContentPage {
  title: string;
  description: string;
  self: string;
  header: string;
  content: string;
}

export class BasePageComponent implements OnActivate {

  @ViewChild('header', {read: ViewContainerRef}) header: ViewContainerRef;
  @ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;

  constructor(protected cms: CmsService, protected dcl: DynamicComponentLoader, protected title: Title) {
  }

  routerOnActivate(next: RouteSegment): any {
    return new Promise((resolve) => {
      this.cms.getContent(next.stringifiedUrlSegments).subscribe((page) => {
        this.renderPage(page);
        resolve(page);
      });
    });
  }

  renderPage(page: ContentPage) {
    this.title.setTitle(page.title);
    this.renderTemplate(page.header, this.header);
    this.renderTemplate(page.content, this.content);
  }

  renderTemplate(template: string, location: ViewContainerRef) {
    this.dcl.loadNextToLocation(
      this.createContentComponent(template, [ContentLink, SessionListComponent]),
      location
    );
  }

  createContentComponent(template: string, directives = []) {
    @Component({
      selector: 'content-component',
      template: template,
      directives: directives
    })
    class ContentComponent {
    }

    return ContentComponent;
  }
}

