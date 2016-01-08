import {Component} from 'angular2/core';
import {Router, OnActivate, ComponentInstruction} from 'angular2/router';
import {Title} from 'angular2/platform/browser';

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

  constructor(private _sessionService: SessionService, private _router: Router, protected _title: Title) {
  }

  routerOnActivate(next: ComponentInstruction): any {
    return new Promise((resolve) => {
      this._sessionService.getByPath(next.urlPath).subscribe((session) => {
        this.session = session;
        this._title.setTitle(this.session.title  + ' - ' + this._title.getTitle());
        resolve(session);
      });
    });
  }

  close() {
    this._title.setTitle(this._title.getTitle().substring(this.session.title.length + 3));
    this._router.navigateByUrl('/session');
  }

}
