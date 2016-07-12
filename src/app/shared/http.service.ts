import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../index';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

  protected headers: Headers = new Headers();
  protected $observables: {[id: string]: Observable<any>} = {};
  protected data: {[id: string]: Observable<any>} = {};

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(url: string) {
    if (this.data.hasOwnProperty(url)) {
      return Observable.of(this.data[url]);
    } else if (this.$observables.hasOwnProperty(url)) {
      return this.$observables[url];
    } else {
      this.$observables[url] = this.http.get(environment.endpoint + url, {
        headers: this.headers,
        withCredentials: true
      })
        .map(res => res.json())
        .catch((error: any) => {
          let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          delete this.data[url];
          delete this.$observables[url];
          return Observable.throw(errMsg);
        })
        .do(val => {
          this.data[url] = val;
          delete this.$observables[url];
        })
        .share();
      return this.$observables[url];
    }
  }

  post(url: string, object: any) {
    return this.http.post(environment.endpoint + url, JSON.stringify(object), {
      headers: this.headers,
      withCredentials: true
    }).map(res => res.json());
  }

}
