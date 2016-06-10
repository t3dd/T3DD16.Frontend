import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 't3dd16-speaker-image',
  templateUrl: 'speaker-image.component.html',
  styleUrls: [ 'speaker-image.component.css' ]
})
export class SpeakerImageComponent {

  @Input() image: string;

}
