import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Session } from '../../model';
import { ScheduleService } from '../../shared';
import { environment } from '../../environments/environment';

@Component({
  selector: 't3dd16-schedule-list',
  templateUrl: 'schedule-list.component.html',
  styleUrls: ['schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  sessions$: Observable<Session[]>;
  sessionsByDay = [];
  filteredSessions = [];
  filter = {day: ''};

  constructor(private scheduleService: ScheduleService, private router: Router) {
  }

  ngOnInit(): any {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.sessions$ = this.scheduleService.get().map((sessions: Session[]) => {
      sessions.forEach((session) => {
        session.start = new Date(<string>session.start);
        session.end = new Date(<string>session.end);
        session.day = days[(<Date>session.start).getDay()];
      });
      return sessions;
    });
    this.sessions$.subscribe((sessions: Session[]) => {
      let days = {};
      sessions.forEach((session) => {
        if (!days[session.day]) {
          days[session.day] = {
            name: session.day,
            date: session.start,
            sessions: []
          };
        }
        days[session.day].sessions.push(session);
      });
      Object.keys(days).forEach((key) => this.sessionsByDay.push(days[key]));
      this.filteredSessions = this.sessionsByDay;
    });
  }

  setFilter(name, value) {
    this.filter[name] = value;
    if (value === '') {
      this.filteredSessions = this.sessionsByDay;
    } else {
      this.filteredSessions = this.sessionsByDay.filter((day) => day.name === value);
    }
  }

  onSelect(session: Session) {
    this.router.navigateByUrl(session.links.route.replace(environment.endpoint, '').replace(/^\/|\/$/g, ''));
  }

}
