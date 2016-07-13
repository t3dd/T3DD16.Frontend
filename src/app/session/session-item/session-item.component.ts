import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { Session } from '../../model';
import { SessionSpeakersComponent } from '../session-speakers';
import { SpeakerImageComponent } from '../speaker-image';
import { SessionVoteComponent } from '../session-vote/session-vote.component';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-item',
  directives: [SessionSpeakersComponent, SpeakerImageComponent, SessionVoteComponent],
  templateUrl: 'session-item.component.html',
  styleUrls: ['session-item.component.css']
})
export class SessionItemComponent {

  @Input() session: Session;
  @Output() select = new EventEmitter();

  @HostListener('click') onClick() {
    this.select.emit(this.session);
  }

}
