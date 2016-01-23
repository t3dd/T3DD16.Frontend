import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CmsService} from './../../providers/cmsService';
import {Page} from './../../model/page';

@Component({
  selector: 'footer',
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styleUrls: ['assets/styles/footer.css'],
  templateUrl: 'app/components/footer/footer.html'
})
export class FooterComponent implements OnInit {

  footer: Page;

  constructor(private _cmsService: CmsService) {
  }

  ngOnInit(): any {
    this._cmsService.getNavigation().subscribe(res => this.footer = res.footer);
  }
}
