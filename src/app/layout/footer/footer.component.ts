import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Page } from '../../model/page';
import { CmsService } from '../../shared';
import { ContentLink } from '../../content-link.directive';

@Component({
  moduleId: module.id,
  selector: 't3dd16-footer',
  directives: [ROUTER_DIRECTIVES, ContentLink],
  templateUrl: 'footer.component.html',
  styleUrls: [ 'footer.component.css' ]
})
export class FooterComponent implements OnInit {

  pages: Page[];

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.pages = res.footer.children);
  }

}
