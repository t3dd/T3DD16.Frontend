import { RouterModule, Routes }  from '@angular/router';
import { PageComponent } from './page';
import { ScheduleDetailComponent } from './schedule';

const routes: Routes = [
  {
    path: 'sessions',
    children: [
      {
        path: ':session',
        redirectTo: '/schedule/:session'
      },
      {
        path: '',
        redirectTo: '/schedule'
      }
    ]
  },
  {
    path: 'schedule',
    children: [
      {
        path: '',
        data: {
          path: 'schedule'
        },
        children: [
          {path: '', component: PageComponent}
        ]
      },
      {
        path: ':session',
        data: {
          path: 'schedule'
        },
        children: [
          {path: '', component: PageComponent},
          {path: '', component: ScheduleDetailComponent, outlet: 'modal'}
        ]
      }
    ]
  },
  {
    path: '',
    component: PageComponent
  },
  {
    path: ':path',
    component: PageComponent
  }
];

export const routing = RouterModule.forRoot(routes);
