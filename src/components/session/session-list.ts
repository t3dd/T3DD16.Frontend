import {Component, OnInit} from 'angular2/core';
import {SessionService} from '../../providers/sessionService';
import {Session} from '../../model/session';
import {SessionComponent} from './session';

@Component({
  selector: 'session-list',
  directives: [SessionComponent],
  providers: [SessionService],
  templateUrl: 'app/components/session/session-list.html'
})
export class SessionListComponent implements OnInit {

  sessions: Session[];

  constructor (private _sessionService: SessionService) {
  }

  ngOnInit (): any {
    this._sessionService.get().subscribe(res => this.sessions = res);
  }

}
