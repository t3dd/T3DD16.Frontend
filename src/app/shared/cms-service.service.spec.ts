import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CmsService } from './cms-service.service';

describe('CmsService Service', () => {
  beforeEachProviders(() => [CmsService]);

  it('should ...',
      inject([CmsService], (service: CmsService) => {
    expect(service).toBeTruthy();
  }));
});
