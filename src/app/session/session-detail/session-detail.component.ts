import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Session } from '../../model';
import { SessionService } from '../../shared';

@Component({
  selector: 't3dd16-session-detail',
  templateUrl: 'session-detail.component.html',
  styleUrls: ['session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  session: Session;

  constructor(private sessionService: SessionService, private router: Router, protected title: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sessionService.getByPath(this.route.snapshot.params['session']).subscribe((session) => {
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
