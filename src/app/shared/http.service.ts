import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../index';

@Injectable()
export class HttpService {

  protected headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  get(url: string) {
    return this.http.get(environment.endpoint + url, {headers: this.headers, withCredentials: true}).map(res => res.json())
  }

  post(url: string, object: any) {
    return this.http.post(environment.endpoint + url, JSON.stringify(object), {headers: this.headers, withCredentials: true}).map(res => res.json());
  }

}
