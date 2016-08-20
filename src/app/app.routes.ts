import { RouterModule, Routes }  from '@angular/router';
import { PageComponent } from './page';
import { SessionDetailComponent } from './session';

const routes: Routes = [
  {
    path: 'sessions',
    children: [
      {
        path: '',
        data: {
          path: 'sessions'
        },
        children: [
          {path: '', component: PageComponent}
        ]
      },
      {
        path: ':session',
        data: {
          path: 'sessions'
        },
        children: [
          {path: '', component: PageComponent},
          {path: '', component: SessionDetailComponent, outlet: 'modal'}
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
