import {User} from './user';
import {Room} from './room';
import {Topic} from './topic';

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
  topics: Topic[];
  room: Room;
  highlight: boolean;
  votes: number;
  voted: boolean;
  links: {
    self: string,
    route: string,
  };
}
