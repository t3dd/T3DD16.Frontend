export { SessionDetailComponent } from './session-detail';
export { SessionListComponent } from './session-list';
export { SessionItemComponent } from './session-item';
export { SessionSpeakersComponent } from './session-speakers';

import { SessionDetailComponent } from './session-detail';
import { SessionListComponent } from './session-list';
import { SessionItemComponent } from './session-item';
import { SessionSpeakersComponent } from './session-speakers';
import { SessionVoteComponent } from './session-vote/session-vote.component';
import { SpeakerImageComponent } from './speaker-image/speaker-image.component';

export const SESSION_COMPONENTS = [
  SessionDetailComponent,
  SessionItemComponent,
  SessionListComponent,
  SessionSpeakersComponent,
  SessionVoteComponent,
  SpeakerImageComponent
];
