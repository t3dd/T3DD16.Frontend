import { Component, Directive, HostListener, ElementRef, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/common';
import { MdInput } from '@angular2-material/input';

const MD_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(NG_VALUE_ACCESSOR, {
  useExisting: forwardRef(() => MdTextarea),
  multi: true
});

@Directive({
  selector: 'textarea[autosize]'
})
export class Autosize {
  @HostListener('input', [ '$event.target' ])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  constructor(public element: ElementRef) {
  }

  ngOnInit(): void {
    this.adjust();
  }

  adjust(): void {
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + 'px';
  }
}

@Component({
  moduleId: module.id,
  selector: 'md-textarea',
  directives: [Autosize],
  providers: [ MD_INPUT_CONTROL_VALUE_ACCESSOR ],
  templateUrl: 'textarea.component.html',
  styleUrls: [ 'textarea.component.css' ],
  host: {'(click)': 'focus()'}
})
export class MdTextarea extends MdInput {

}
