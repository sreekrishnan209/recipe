import { TestBed } from '@angular/core/testing';

import { ApiFetchingService } from './api-fetching.service';

describe('ApiFetchingService', () => {
  let service: ApiFetchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFetchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
