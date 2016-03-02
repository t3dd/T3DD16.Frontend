import {Component} from 'angular2/core';
import {Router, OnActivate, ComponentInstruction} from 'angular2/router';
import {Title} from 'angular2/platform/browser';

import {SessionService} from '../../providers/sessionService';
import {Session} from '../../model/session';
import {MarkdownPipe} from '../../pipes/markdown';

import {SessionSpeakerComponent} from './session-speaker';

@Component({
  selector: 'session-detail',
  directives: [SessionSpeakerComponent],
  providers: [SessionService],
  pipes: [MarkdownPipe],
  host: {
    '(body:keydown)': 'documentKeypress($event)',
  },
  styleUrls: ['assets/styles/session.css'],
  templateUrl: 'app/components/session/session-detail.html'
})
export class SessionDetailComponent implements OnActivate {

  session: Session;

  constructor(private sessionService: SessionService, private router: Router, protected title: Title) {
  }

  routerOnActivate(next: ComponentInstruction): any {
    return new Promise((resolve) => {
      this.sessionService.getByPath(next.urlPath).subscribe((session) => {
        this.session = session;
        this.title.setTitle(this.session.title + ' - ' + this.title.getTitle());
        resolve(session);
      });
    });
  }

  close() {
    this.title.setTitle(this.title.getTitle().substring(this.session.title.length + 3));
    this.router.navigateByUrl('/session');
  }

  documentKeypress(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.close();
    }
  }

}
