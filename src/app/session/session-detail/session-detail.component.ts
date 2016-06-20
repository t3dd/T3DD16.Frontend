import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { Session } from '../../model';
import { SessionService } from '../../shared';
import { SessionSpeakersComponent } from '../session-speakers';
import { SpeakerImageComponent } from '../speaker-image';
import { Markdown } from '../../markdown.pipe';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-detail',
  directives: [SessionSpeakersComponent, SpeakerImageComponent],
  providers: [SessionService],
  pipes: [Markdown],
  templateUrl: 'session-detail.component.html',
  styleUrls: [ 'session-detail.component.css' ]
})
export class SessionDetailComponent implements OnActivate {

  session: Session;

  constructor(private sessionService: SessionService, private router: Router, protected title: Title) {
  }

  routerOnActivate(curr: RouteSegment): void {
    this.sessionService.getByPath(curr.parameters['session']).subscribe((session) => {
      this.title.setTitle(session.title + ' - ' + this.title.getTitle());
      this.session = session;
    });
  }

  close() {
    this.title.setTitle(this.title.getTitle().substring(this.session.title.length + 3));
    this.router.navigateByUrl('/sessions');
  }

  @HostListener('window:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.close();
    }
  }

}
