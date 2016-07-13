import {User} from './user';

export interface Session {
  __identity: number;
  title: string;
  description: string;
  date: string;
  lightning: string;
  start: string;
  end: string;
  speakers: User[];
  room: string;
  highlight: boolean;
  votes: number;
  links: {
    self: string,
    route: string,
  };
}
