import {Injectable} from 'angular2/core';
import {HttpCache} from './httpCache';

@Injectable()
export class CmsService {

  constructor(private http: HttpCache) {
  }

  getContent(url: string) {
    return this.http.get(url + '/');
  }

  getNavigation() {
    return this.http.get('?type=1450887489');
  }

}
