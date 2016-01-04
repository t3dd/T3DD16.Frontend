import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
  selector: 'loading',
  directives: [],
  pipes: [],
  host: {
    '[hidden]': '!router.navigating'
  },
  styleUrls: [],
  templateUrl: 'app/components/loading/loading.html'
})
export class LoadingComponent {
  router: Router;

  constructor (router: Router) {
    this.router = router;
  }
}
