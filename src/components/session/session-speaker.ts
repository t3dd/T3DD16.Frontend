import {Component, Input} from 'angular2/core';
import {Session} from '../../model/session';

@Component({
  selector: 'session-speaker',
  templateUrl: 'app/components/session/session-speaker.html',
  styleUrls: ['assets/styles/session.css'],
  inputs: ['session']
})
export class SessionSpeakerComponent {

  @Input()
  session: Session;



}
