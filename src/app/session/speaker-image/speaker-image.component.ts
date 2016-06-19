import { Component, Input } from '@angular/core';
import { SafePipe } from '../../safe.pipe';

@Component({
  moduleId: module.id,
  selector: 't3dd16-speaker-image',
  pipes: [SafePipe],
  templateUrl: 'speaker-image.component.html',
  styleUrls: [ 'speaker-image.component.css' ]
})
export class SpeakerImageComponent {

  @Input() image: string;

}
