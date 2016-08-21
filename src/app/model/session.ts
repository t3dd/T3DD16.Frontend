import {User} from './user';
import {Room} from './room';

export interface Session {
  __identity: number;
  title: string;
  description: string;
  date: string;
  lightning: string;
  start: Date|string;
  end: Date|string;
  day: string;
  speakers: User[];
  room: Room;
  highlight: boolean;
  votes: number;
  links: {
    self: string,
    route: string,
  };
}
