import {Component, Input} from 'angular2/core';
import {Session} from '../../model/session';

@Component({
  selector: 'session',
  providers: [],
  styleUrls: ['assets/styles/session.css'],
  templateUrl: 'app/components/session/session.html'
})
export class SessionComponent {

  @Input() session: Session;

}
