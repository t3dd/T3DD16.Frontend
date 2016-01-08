import {Component} from 'angular2/core';
import {Router, OnActivate, ComponentInstruction} from 'angular2/router';

import {SessionService} from '../../providers/sessionService';
import {Session} from '../../model/session';
import {MarkdownPipe} from '../../pipes/markdown';

@Component({
  selector: 'session-detail',
  providers: [SessionService],
  pipes: [MarkdownPipe],
  styleUrls: ['assets/styles/session.css'],
  templateUrl: 'app/components/session/session-detail.html'
})
export class SessionDetailComponent implements OnActivate {

  session: Session;

  constructor(private _sessionService: SessionService, private _router: Router) {
  }

  routerOnActivate(next: ComponentInstruction): any {
    return new Promise((resolve) => {
      this._sessionService.getByPath(next.urlPath).subscribe((session) => {
        this.session = session;
        resolve(session);
      });
    });
  }

  close() {
    this._router.navigateByUrl('/session');
  }

}
