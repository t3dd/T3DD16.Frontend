import { Component } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Markdown } from '../../markdown.pipe';
import { SessionService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-create',
  directives: [ FORM_DIRECTIVES ],
  providers: [ SessionService ],
  pipes: [ Markdown ],
  templateUrl: 'session-create.component.html',
  styleUrls: [ 'session-create.component.css' ]
})
export class SessionCreateComponent {

  title: Control;
  description: Control;
  form: ControlGroup;

  constructor(private router: Router, private builder: FormBuilder, private sessionService: SessionService, protected _title: Title) {
    this._title.setTitle('Propose ' + this._title.getTitle());
    this.title = new Control('', Validators.required);
    this.description = new Control('', Validators.required);
    this.form = builder.group({
      title: this.title,
      description: this.description
    });
  }

  close() {
    this._title.setTitle(this._title.getTitle().substring(8));
    this.router.navigateByUrl('/sessions');
  }

  onSubmit() {
    if (this.form.valid) {
      this.sessionService.create(this.form.value).subscribe(
        res => this.close(),
        error => console.log(error)
      );
    }
  }

}
