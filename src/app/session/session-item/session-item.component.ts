import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { Session } from '../../model';

@Component({
  selector: 't3dd16-session-item',
  templateUrl: 'session-item.component.html',
  styleUrls: ['session-item.component.scss']
})
export class SessionItemComponent {

  @Input() session: Session;
  @Output() select = new EventEmitter();

  @HostListener('click') onClick() {
    this.select.emit(this.session);
  }

}
