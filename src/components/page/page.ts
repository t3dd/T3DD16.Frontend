import {Component, View, OnInit, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {CmsService} from './../../providers/cmsService';

export interface ContentPage {
  title: string;
  description: string;
  self: string;
  header: string;
  content: string;
}

@Component({
  selector: 'page',
  providers: [Title],
  templateUrl: 'app/components/page/page.html'
})
export class PageComponent implements OnInit {

  constructor(private _cmsService: CmsService, private _title: Title, private _dcl: DynamicComponentLoader, private _elementRef: ElementRef) {
  }

  ngOnInit() {
    this._cmsService.getContent().subscribe(page => this.renderPage(page));
  }

  /**
   * @param {ContentPage} page
   */
  renderPage(page: ContentPage) {
    this._title.setTitle(page.title);
    this.renderTemplate(page.header, 'header');
    this.renderTemplate(page.content, 'content');
  }

  /**
   * @param {String} template
   * @param {String} anchorName
   */
  renderTemplate(template: string, anchorName: string) {
    this._dcl.loadIntoLocation(
      this.createContentComponent(template, []),
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
