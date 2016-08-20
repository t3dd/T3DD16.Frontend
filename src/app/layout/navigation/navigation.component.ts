import { Component, OnInit } from '@angular/core';

import { Page } from '../../model';
import { CmsService } from '../../shared';

@Component({
  selector: 't3dd16-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pages: Page[];

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.pages = res.rootpage.children);
  }

}
