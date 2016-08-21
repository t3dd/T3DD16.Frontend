import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdSidenavModule } from '@angular2-material/sidenav';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { ContentLinkDirective } from './content-link.directive';
import { CmsService, HttpService, SessionService, ScheduleService, UserService, VoteService } from './shared';
import { APP_PIPES } from './pipes';
import { LAYOUT_COMPONENTS } from './layout';
import { LoginComponent } from './login';
import { PageComponent } from './page';
import { SESSION_COMPONENTS } from './session';
import { SCHEDULE_COMPONENTS } from './schedule';

@NgModule({
  declarations: [
    AppComponent,
    ContentLinkDirective,
    LoginComponent,
    PageComponent,
    ...APP_PIPES,
    ...LAYOUT_COMPONENTS,
    ...SESSION_COMPONENTS,
    ...SCHEDULE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdSidenavModule,
    routing
  ],
  providers: [
    CmsService,
    HttpService,
    SessionService,
    ScheduleService,
    UserService,
    VoteService,
    Title
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
