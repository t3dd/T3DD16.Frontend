import {Component} from 'angular2/core';
//import {AsyncPipe} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CmsService} from './../../providers/cmsService';

export interface Page {
  title: string;
  type: string;
  link: string;
  children: Page[];
}

@Component({
  selector: 'navigation',
  directives: [...ROUTER_DIRECTIVES],
  providers: [CmsService],
  pipes: [],
  styleUrls: ['./css/navigation.css'],
  templateUrl: './templates/navigation/navigation.html'
})
export class NavigationComponent {

  rootpage: Page;

  constructor(private _cmsService: CmsService) {
    this._cmsService.getNavigation().subscribe(res => this.rootpage = res.rootpage);
  }

}
