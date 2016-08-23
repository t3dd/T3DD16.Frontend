import { Markdown } from './markdown.pipe';
import { SafePipe } from './safe.pipe';
import { DateFixPipe } from './date-fix.pipe';

export const APP_PIPES = [
  Markdown,
  SafePipe,
  DateFixPipe
];
