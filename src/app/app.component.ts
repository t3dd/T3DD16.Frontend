import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from './../environments/environment';

@Component({
  selector: 't3dd16-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  title: string;

  constructor(router: Router) {
    let currentPage = '', lastPage = '';
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        currentPage = s.url;
        if (environment.production && !!lastPage.indexOf('/sessions/')) {
          ga('set', 'page', currentPage);
          ga('send', 'pageview');
        }
        lastPage = currentPage;
      }
    });
  }

}
