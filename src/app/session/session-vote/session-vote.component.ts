declare function ga(command: string, type: string, config?: any);

import { Component, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Session, User } from '../../model';
import { UserService, VoteService } from '../../shared';

@Component({
  selector: 't3dd16-session-vote',
  templateUrl: 'session-vote.component.html',
  styleUrls: ['session-vote.component.scss']
})
export class SessionVoteComponent implements AfterViewInit {

  @Input() session: Session;
  voted: boolean = false;
  loggedIn: boolean = false;

  private user$: Observable<User>;

  constructor(private userService: UserService, private voteService: VoteService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.user$ = this.userService.getUser();
      this.user$.subscribe(() => this.fetchVotes());
    }, 0);
  }

  toggleVote(event: any) {
    event.stopPropagation();

    if (!this.loggedIn) {
      this.userService.login();
      return;
    }

    if (this.voted) {
      this.removeVote();
    } else {
      this.createVote();
    }
  }

  private createVote() {
    this.voted = true;
    this.session.votes++;

    ga('send', 'event', {
      'eventCategory': 'voting',
      'eventAction': 'create',
      'eventLabel': this.session.title
    });

    this.voteService.create(this.session)
      .catch((error: any) => {
        this.voted = true;
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      })
      .subscribe(() => {
      });
  }

  private removeVote() {
    this.voted = false;
    this.session.votes--;

    ga('send', 'event', {
      'eventCategory': 'voting',
      'eventAction': 'remove',
      'eventLabel': this.session.title
    });

    this.voteService.delete(this.session)
      .catch((error: any) => {
        this.voted = true;
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
      })
      .subscribe(() => {
      });
  }

  private fetchVotes() {
    this.voteService.get().subscribe((votes) => {
      this.loggedIn = true;

      if (this.session) {
        this.voted = votes.some((vote) => {
          return vote.session === this.session.__identity;
        });
      }
    });
  }

}
