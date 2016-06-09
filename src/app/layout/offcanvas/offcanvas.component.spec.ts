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
import { OffcanvasComponent } from './offcanvas.component';

describe('Component: Offcanvas', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OffcanvasComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OffcanvasComponent],
      (component: OffcanvasComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OffcanvasComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OffcanvasComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <t3dd16-offcanvas></t3dd16-offcanvas>
  `,
  directives: [OffcanvasComponent]
})
class OffcanvasComponentTestController {
}

