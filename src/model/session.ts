import {User} from './user';

export interface Session {
  title: string;
  description: string;
  date: string;
  lightning: string;
  start: string;
  end: string;
  speakers: User[];
  room: string;
  highlight: boolean;
  links: {
    self: string,
    route: string,
  };
}
