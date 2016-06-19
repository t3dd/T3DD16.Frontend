import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ContentLink } from '../../content-link.directive';
import { CmsService } from '../../shared';
import { Page } from '../../model/page';

@Component({
  moduleId: module.id,
  selector: 't3dd16-sidenav-content',
  directives: [ROUTER_DIRECTIVES, ContentLink],
  templateUrl: 'sidenav-content.component.html',
  styleUrls: ['sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  pages$: Observable<Page>;

  constructor(private cmsService: CmsService) {
  }

  ngOnInit(): any {
    this.pages$ = this.cmsService.getNavigation().map((res) => {
      return res.rootpage;
    });
  }

}
