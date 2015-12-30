import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CmsService} from './../../providers/cmsService';
import {Page} from './../../model/page';

@Component({
  selector: 'navigation',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styleUrls: ['assets/styles/navigation.css'],
  templateUrl: 'app/components/navigation/navigation.html'
})
export class NavigationComponent implements OnInit {

  rootpage: Page;

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.rootpage = res.rootpage);
  }

}
