import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Markdown } from './markdown.pipe';

describe('Markdown Pipe', () => {
  beforeEachProviders(() => [Markdown]);

  it('should transform the input', inject([Markdown], (pipe: Markdown) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
