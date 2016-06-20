import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionSpeakersComponent } from './session-speakers.component';

describe('Component: SessionSpeakersComponent', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SessionSpeakersComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SessionSpeakersComponent],
      (component: SessionSpeakersComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SessionSpeakersComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SessionSpeakersComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <t3dd16-session-speakers></t3dd16-session-speakers>
  `,
  directives: [SessionSpeakersComponent]
})
class SessionSpeakersComponentTestController {
}

