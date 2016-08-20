import { Component, Input } from '@angular/core';

@Component({
  selector: 't3dd16-speaker-image',
  templateUrl: 'speaker-image.component.html',
  styleUrls: [ 'speaker-image.component.scss' ]
})
export class SpeakerImageComponent {

  @Input() image: string;

}
