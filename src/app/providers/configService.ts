import {Injectable, Inject} from 'angular2/core';

@Injectable()
export class ConfigService {

  protected config: any;

  constructor(@Inject('externalConfig') externalConfig) {
    this.config = externalConfig;
  }

  setConfig(value) {
    this.config = value;
  }

  get(value) {
    return this.config[value];
  }

}
