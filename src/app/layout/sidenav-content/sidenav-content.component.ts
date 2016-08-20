import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular2-material/sidenav';

import { CmsService } from '../../shared';
import { Page } from '../../model/page';

@Component({
  selector: 't3dd16-sidenav-content',
  templateUrl: 'sidenav-content.component.html',
  styleUrls: ['sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {

  @Input() sidenav: MdSidenav;
  pages: Page[];

  constructor(private cmsService: CmsService) {
  }

  ngOnInit(): any {
    this.cmsService.getNavigation().subscribe(res => this.pages = res.rootpage.children);
  }

}
