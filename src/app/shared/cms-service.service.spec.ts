import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CmsServiceService } from './cms-service.service';

describe('CmsService Service', () => {
  beforeEachProviders(() => [CmsServiceService]);

  it('should ...',
      inject([CmsServiceService], (service: CmsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
