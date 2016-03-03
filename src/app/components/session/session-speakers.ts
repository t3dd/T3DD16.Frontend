import {Component, Input} from 'angular2/core';

import {User} from '../../model/user';

@Component({
  selector: 'session-speakers',
  styleUrls: ['assets/styles/session-speakers.css'],
  templateUrl: 'app/components/session/session-speakers.html'
})
export class SessionSpeakersComponent {

  @Input()
  speakers: User[];

}
