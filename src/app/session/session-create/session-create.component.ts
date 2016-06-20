import { Component } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import { Markdown } from '../../markdown.pipe';
import { SessionService } from '../../shared';
import { MdTextarea } from '../../material/textarea';

@Component({
  moduleId: module.id,
  selector: 't3dd16-session-create',
  directives: [ FORM_DIRECTIVES, MD_INPUT_DIRECTIVES, MdTextarea ],
  providers: [ SessionService ],
  pipes: [ Markdown ],
  templateUrl: 'session-create.component.html',
  styleUrls: [ 'session-create.component.css' ]
})
export class SessionCreateComponent {

  title = new Control('', Validators.required);
  description = new Control('', Validators.required);
  form = new ControlGroup({
    title: this.title,
    description: this.description
  });

  constructor(private router: Router, private sessionService: SessionService, protected _title: Title) {
    this._title.setTitle('Propose ' + this._title.getTitle());
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
