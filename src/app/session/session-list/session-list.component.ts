import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Session } from '../../model';
import { SessionService } from '../../shared';
import { environment } from '../../../environments/environment';

@Component({
  selector: 't3dd16-session-list',
  templateUrl: 'session-list.component.html',
  styleUrls: ['session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  sessions: Observable<Session[]>;

  constructor(private sessionService: SessionService, private router: Router) {
  }

  ngOnInit(): any {
    this.sessions = this.sessionService.get();
  }

  onSelect(session: Session) {
    this.router.navigateByUrl(session.links.route.replace(environment.endpoint, '').replace(/^\/|\/$/g, ''));
  }

}
