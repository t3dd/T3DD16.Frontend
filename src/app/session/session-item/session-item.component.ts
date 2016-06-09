import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { SessionSpeakerComponent } from '../session-speaker';
import { Session } from '../../model';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-item',
  directives: [SessionSpeakerComponent],
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
