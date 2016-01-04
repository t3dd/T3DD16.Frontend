import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CmsService} from './../../providers/cmsService';
import {AppStates} from './../../providers/appStates';
import {Page} from './../../model/page';
import {States} from './../../model/states';


@Component({
  selector: 'offcanvas-backdrop',
  host: {
    '(click)': 'close()',
  },
  template: ''
})
class OffcanvasBackdrop {
  constructor(private _AppStates: AppStates) {
  }

  close() {
    this._AppStates.toggleOffcanvas();
  }
}

@Component({
  selector: 'offcanvas',
  directives: [...ROUTER_DIRECTIVES, OffcanvasBackdrop],
  pipes: [],
  styleUrls: ['assets/styles/offcanvas.css'],
  templateUrl: 'app/components/navigation/offcanvas.html'
})
export class OffcanvasComponent implements OnInit {

  states: States;
  rootpage: Page;

  constructor(private _cmsService: CmsService, private _AppStates: AppStates) {
    this.states = this._AppStates.states;
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.rootpage = res.rootpage);
  }

}
