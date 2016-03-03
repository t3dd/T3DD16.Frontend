import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {StringMapWrapper} from 'angular2/src/facade/collection';
import {Observable} from 'rxjs/Observable';
import {ConfigService} from './configService';

@Injectable()
export class HttpCache {

  protected cache: {[key: string]: Observable<any>} = StringMapWrapper.create();
  protected headers: Headers = new Headers();
  protected prefix: string = '';

  constructor(private http: Http, private config: ConfigService) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.prefix = config.get('restPrefix');
  }

  get(url: string) {
    url = this.prefix + url;
    if (!StringMapWrapper.contains(this.cache, url)) {
      let request = this.http.get(url, {headers: this.headers}).map(res => res.json()).share();
      StringMapWrapper.set(this.cache, url, request);
    }

    return StringMapWrapper.get(this.cache, url);
  }

  post(url: string, object: any) {
    url = this.prefix + url;
    return this.http.post(url, JSON.stringify(object), {headers: this.headers}).map(res => res.json());
  }

}
