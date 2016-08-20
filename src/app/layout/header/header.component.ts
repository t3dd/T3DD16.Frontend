import { Component, Input } from '@angular/core';
import { MdSidenav } from '@angular2-material/sidenav';

@Component({
  selector: 't3dd16-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  @Input() sidenav: MdSidenav;

  constructor() {}

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
