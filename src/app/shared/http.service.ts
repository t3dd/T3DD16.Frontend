import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  protected headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(url: string) {
    return this.http.get('http://t3dd16.nowak.nlx.wtf/' + url, {headers: this.headers}).map(res => res.json())
  }

  post(url: string, object: any) {
    return this.http.post('http://t3dd16.nowak.nlx.wtf/' + url, JSON.stringify(object), {headers: this.headers}).map(res => res.json());
  }

}
