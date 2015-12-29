import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {App} from './app';

describe('App', () => {

  it('should be defined', inject([ App ], (app) => {
    expect(app).toBeDefined();
  }));

});
