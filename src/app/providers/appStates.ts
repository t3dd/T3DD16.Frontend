import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {States} from './../model/states';

@Injectable()
export class AppStates {

  states: States;

  constructor(private _router: Router) {
    this.states = new States();
    this._router.subscribe((_) => this.states.offcanvas = false);
  }

  toggleOffcanvas() {
    this.states.offcanvas = !this.states.offcanvas;
  }

}
