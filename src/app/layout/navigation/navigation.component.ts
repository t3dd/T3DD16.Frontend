import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Page } from '../../model';
import { CmsService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 't3dd16-navigation',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {

  pages: Page[];

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.pages = res.rootpage.children);
  }

}
