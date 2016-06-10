import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Session } from '../../model';
import { SessionService } from '../../shared';
import { SessionItemComponent } from '../session-item';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-list',
  directives: [SessionItemComponent],
  providers: [SessionService],
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.css']
})
export class SessionListComponent implements OnInit {

  sessions: Session[];

  constructor(private sessionService: SessionService, private router: Router) {
    router.changes.subscribe(() => {
      this.sessionService.get().subscribe(res => this.sessions = res);
    });
  }

  ngOnInit(): any {
    this.sessionService.get().subscribe(res => this.sessions = res);
  }

  onSelect(session: Session) {
    let loc = session.links.route;
    loc = loc.lastIndexOf('/') === (loc.length - 1) ? loc.substr(0, loc.length - 1) : loc.substr(0, loc.lastIndexOf('/'));
    let urlPath = loc.substr(loc.lastIndexOf('/') + 1);
    this.router.navigate(['sessions', urlPath]);
  }

}
