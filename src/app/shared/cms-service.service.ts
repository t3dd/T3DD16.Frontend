import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class CmsService {

  constructor(private http: HttpService) {
  }

  getContent(url: string) {
    return this.http.get(url + '/?v=1');
  }

  getNavigation() {
    return this.http.get('?type=1450887489').share();
  }

}
