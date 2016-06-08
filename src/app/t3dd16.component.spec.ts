import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { T3DD16AppComponent } from './t3dd16.component';

beforeEachProviders(() => [T3DD16AppComponent]);

describe('App: T3DD16', () => {
  it('should create the app',
      inject([T3DD16AppComponent], (app: T3DD16AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'t3-dd16 works!\'',
      inject([T3DD16AppComponent], (app: T3DD16AppComponent) => {
    expect(app.title).toEqual('t3-dd16 works!');
  }));
});
