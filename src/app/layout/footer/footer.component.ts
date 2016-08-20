import { Component, OnInit } from '@angular/core';

import { Page } from '../../model/page';
import { CmsService } from '../../shared';

@Component({
  selector: 't3dd16-footer',
  templateUrl: 'footer.component.html',
  styleUrls: [ 'footer.component.scss' ]
})
export class FooterComponent implements OnInit {

  pages: Page[];

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.pages = res.footer.children);
  }

}
