import {Injectable} from 'angular2/core';
import {States} from './../model/states';

@Injectable()
export class AppStates {

  states: States;

  constructor() {
    this.states = new States();
  }

  toggleOffcanvas() {
    this.states.offcanvas = !this.states.offcanvas;
  }

}
