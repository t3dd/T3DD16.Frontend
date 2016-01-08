import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

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

  constructor (private _sessionService: SessionService, private _router: Router) {
  }

  ngOnInit (): any {
    this._sessionService.get().subscribe(res => this.sessions = res);
  }

  onSelect (session: Session) {
    let loc = session.links.route;
    loc = loc.lastIndexOf('/') === (loc.length - 1) ? loc.substr(0, loc.length - 1) : loc.substr(0, loc.lastIndexOf('/'));
    let urlPath = loc.substr(loc.lastIndexOf('/') + 1);
    this._router.navigate(['./SessionDetail', {session: urlPath}]);
  }

}
