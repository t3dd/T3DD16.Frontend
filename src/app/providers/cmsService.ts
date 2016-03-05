import {Injectable} from 'angular2/core';
import {HttpCache} from './httpCache';

@Injectable()
export class CmsService {

  constructor(private http: HttpCache) {
  }

  getContent(url: string) {
    return this.http.get(url + '/?v=1');
  }

  getNavigation() {
    return this.http.get('?type=1450887489');
  }

}
