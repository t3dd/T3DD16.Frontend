import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Session } from '../../model';
import { SessionService } from '../../shared';
import { SessionItemComponent } from '../session-item';
import { environment } from '../../environment';

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
  }

  ngOnInit(): any {
    this.sessionService.get().subscribe(res => this.sessions = res);
  }

  onSelect(session: Session) {
    this.router.navigateByUrl(session.links.route.replace(environment.endpoint, '').replace(/^\/|\/$/g, ''));
  }

}
