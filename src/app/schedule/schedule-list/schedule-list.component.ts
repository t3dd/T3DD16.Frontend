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
  agendaSessions = [];
  leisureSessions = [];
  filteredSessions = [];
  filter = {day: '', topic: 'agenda'};

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
      let days = {}, agendaSessions = {}, leisureSessions = {};
      sessions.forEach((session) => {
        if (!days[session.day]) {
          let day = {
            name: session.day,
            date: session.start,
            sessions: []
          };
          days[session.day] = JSON.parse(JSON.stringify(day));
          agendaSessions[session.day] = JSON.parse(JSON.stringify(day));
          leisureSessions[session.day] = JSON.parse(JSON.stringify(day));
        }
        if (!session.topics.length) {
          days[session.day].sessions.push(session);
        }
        session.topics.forEach((topic) => {
          switch (topic.__identity) {
            case 1:
              agendaSessions[session.day].sessions.push(session);
              break;
            case 2:
              leisureSessions[session.day].sessions.push(session);
              break;
            default:
              if (days[session.day].sessions.indexOf(session) === -1) {
                days[session.day].sessions.push(session);
              }
          }
        })
      });
      Object.keys(days).forEach((key) => this.sessionsByDay.push(days[key]));
      Object.keys(agendaSessions).forEach((key) => this.agendaSessions.push(agendaSessions[key]));
      Object.keys(leisureSessions).forEach((key) => this.leisureSessions.push(leisureSessions[key]));
      this.filteredSessions = this.agendaSessions;

      let filter = JSON.parse(localStorage.getItem('filter'));
      if (filter) {
        this.setFilter(filter.name, filter.value);
      }
    });
  }

  setFilter(name, value) {
    localStorage.setItem('filter', JSON.stringify({name: name, value: value}));

    switch (name) {
      case 'day':
        this.filter = {day: value, topic: ''};
        this.filteredSessions = this.sessionsByDay.filter((day) => day.name === value);
        break;
      case 'topic':
        this.filter = {day: value, topic: value};
        if (value === 'agenda') {
          this.filteredSessions = this.agendaSessions;
        } else if (value === 'leisure') {
          this.filteredSessions = this.leisureSessions;
        }
        break;
    }
  }

  onSelect(session: Session) {
    this.router.navigateByUrl(session.links.route.replace(environment.endpoint, '').replace(/^\/|\/$/g, ''));
  }

}
