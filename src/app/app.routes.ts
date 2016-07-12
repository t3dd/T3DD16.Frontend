import { provideRouter, RouterConfig, CanActivate }  from '@angular/router';
import { PageComponent } from './page';
import { SessionCreateComponent, SessionDetailComponent } from './session';
import { AuthGuard } from './auth.guard';

const routes: RouterConfig = [
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
        path: 'new',
        data: {
          path: 'sessions'
        },
        canActivate: [AuthGuard],
        children: [
          {path: '', component: PageComponent},
          {path: '', component: SessionCreateComponent, outlet: 'modal'}
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

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
