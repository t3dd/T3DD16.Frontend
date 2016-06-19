import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: T3DD16', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'t3-dd16 works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('t3-dd16 works!');
  }));
});
