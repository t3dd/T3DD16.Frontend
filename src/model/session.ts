import {User} from './user';

export interface Session {
  title: string;
  description: string;
  date: string;
  lightning: string;
  start: string;
  end: string;
  speaker1: User;
  speaker2: User;
  speaker3: User;
  room: string;
  highlight: boolean;
  links: {
    self: string,
    route: string,
  };
}
