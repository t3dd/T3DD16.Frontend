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
import { SessionCreateComponent } from './session-create.component';

describe('Component: SessionCreate', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SessionCreateComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SessionCreateComponent],
      (component: SessionCreateComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SessionCreateComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SessionCreateComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <t3dd16-session-create></t3dd16-session-create>
  `,
  directives: [SessionCreateComponent]
})
class SessionCreateComponentTestController {
}

