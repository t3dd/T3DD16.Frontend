import { Component, Input } from '@angular/core';
import { User } from '../../model';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-speaker',
  templateUrl: 'session-speaker.component.html',
  styleUrls: ['session-speaker.component.css']
})
export class SessionSpeakerComponent {

  @Input() speakers: User[];

}
