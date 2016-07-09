import {
  Component, OnInit, OnDestroy, DynamicComponentLoader, ViewContainerRef, ViewChild,
  ComponentRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  moduleId: module.id,
  selector: 't3dd16-page',
  providers: [Title],
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {

  @ViewChild('header', {read: ViewContainerRef}) header: ViewContainerRef;
  @ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;

  private sub: any;
  private _children: ComponentRef<any>[] = [];

  constructor(protected cms: CmsService, protected dcl: DynamicComponentLoader, protected title: Title, protected route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let url = this.route.snapshot.data['path'] || params['path'] || '';
      this.cms.getContent(url).subscribe((page) => {
        this.renderPage(page);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  renderPage(page: ContentPage) {
    this._children.forEach(cmp=>cmp.destroy());
    this.title.setTitle(page.title);
    this.renderTemplate(page.header, this.header);
    this.renderTemplate(page.content, this.content);
  }

  renderTemplate(template: string, location: ViewContainerRef) {
    this.dcl.loadNextToLocation(
      this.createContentComponent(template, [ContentLink, SessionListComponent]),
      location
    ).then((ref) => {
      this._children.push(ref);
    });
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

