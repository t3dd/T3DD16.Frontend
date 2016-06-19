import { Component, OnInit, Input } from '@angular/core';
import { NavigationComponent } from '../navigation';
import { LoginComponent } from '../../login';
import { MdSidenav } from '@angular2-material/sidenav';

@Component({
  moduleId: module.id,
  selector: 't3dd16-header',
  directives: [
    NavigationComponent,
    LoginComponent
  ],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MdSidenav;

  constructor() {}

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
