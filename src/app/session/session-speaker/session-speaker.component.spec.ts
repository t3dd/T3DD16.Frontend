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
import { SessionSpeakerComponent } from './session-speaker.component';

describe('Component: SessionSpeaker', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SessionSpeakerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SessionSpeakerComponent],
      (component: SessionSpeakerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SessionSpeakerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SessionSpeakerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <t3dd16-session-speaker></t3dd16-session-speaker>
  `,
  directives: [SessionSpeakerComponent]
})
class SessionSpeakerComponentTestController {
}

