import { Component, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Session, User } from '../../model';
import { UserService, VoteService } from '../../shared';
import { Vote } from '../../model/vote';

@Component({
  selector: 't3dd16-schedule-vote',
  templateUrl: 'schedule-vote.component.html',
  styleUrls: ['schedule-vote.component.scss']
})
export class ScheduleVoteComponent implements AfterViewInit {

  @Input() session: Session;
  votes: Vote[];
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
        this.votes.push({session: this.session.__identity});
      });
  }

  private removeVote() {
    this.voted = false;

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
        let vote = this.votes.filter((vote: Vote) => {
          return vote.session === this.session.__identity;
        })[0];
        delete this.votes[this.votes.indexOf(vote)];
      });
  }

  private fetchVotes() {
    this.voteService.get().subscribe((votes: Vote[]) => {
      this.loggedIn = true;
      this.votes = votes;

      if (this.session) {
        this.voted = votes.some((vote: Vote) => {
          return vote.session === this.session.__identity;
        });
      }
    });
  }

}
