import { Component, Input } from '@angular/core';
import { User } from '../../model';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-speakers',
  templateUrl: 'session-speakers.component.html',
  styleUrls: ['session-speakers.component.css']
})
export class SessionSpeakersComponent {

  @Input() speakers: User[];

}
