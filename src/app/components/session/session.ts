import {Component, Input, Output} from 'angular2/core';
import {EventEmitter} from 'angular2/src/facade/async';
import {Session} from '../../model/session';
import {SessionSpeakersComponent} from './session-speakers';

@Component({
  selector: 'session',
  host: {
    '(click)': 'onClick()'
  },
  directives: [SessionSpeakersComponent],
  styleUrls: ['assets/styles/session.css'],
  templateUrl: 'app/components/session/session.html'
})
export class SessionComponent {

  @Input()
  session: Session;
  @Output()
  select = new EventEmitter();

  onClick() {
    this.select.emit(this.session);
  }

}
