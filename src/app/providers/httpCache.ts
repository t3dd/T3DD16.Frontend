import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {StringMapWrapper} from 'angular2/src/facade/collection';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpCache {

  protected cache: {[key: string]: Observable<any>} = StringMapWrapper.create();
  protected headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(url: string) {
    if (!StringMapWrapper.contains(this.cache, url)) {
      let request = this.http.get(url, {headers: this.headers}).map(res => res.json()).share();
      StringMapWrapper.set(this.cache, url, request);
    }

    return StringMapWrapper.get(this.cache, url);
  }

  post(url: string, object: any) {
    return this.http.post(url, JSON.stringify(object), {headers: this.headers}).map(res => res.json());
  }

}
