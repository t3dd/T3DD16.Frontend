import {Component, View, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';
import {CmsService} from './../../providers/cmsService';
import {ContentLink} from './content-link';
import {SessionListComponent} from '../session/session-list';

export interface ContentPage {
  title: string;
  description: string;
  self: string;
  header: string;
  content: string;
}

export class BasePageComponent implements OnActivate {

  protected _cms: CmsService;
  protected _dcl: DynamicComponentLoader;
  protected _elementRef: ElementRef;

  routerOnActivate(next: ComponentInstruction): any {
    return new Promise((resolve) => {
      this._cms.getContent(next.urlPath).subscribe((page) => {
        this.renderPage(page);
        resolve(page);
      });
    });
  }

  /**
   * @param {ContentPage} page
   */
  renderPage(page: ContentPage) {
    this.renderTemplate(page.header, 'header');
    this.renderTemplate(page.content, 'content');
  }

  /**
   * @param {String} template
   * @param {String} anchorName
   */
  renderTemplate(template: string, anchorName: string) {
    this._dcl.loadIntoLocation(
      this.createContentComponent(template, [ContentLink, SessionListComponent]),
      this._elementRef,
      anchorName
    );
  }

  /**
   * @param {String} template
   * @param {Array} directives
   * @returns {ContentComponent}
   */
  createContentComponent(template: string, directives = []) {
    @Component({selector: 'content-component'})
    @View({template, directives})
    class ContentComponent {
    }

    return ContentComponent;
  }
}
