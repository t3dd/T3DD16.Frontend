import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation';

@Component({
  moduleId: module.id,
  selector: 't3dd16-header',
  directives: [
    NavigationComponent
  ],
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
