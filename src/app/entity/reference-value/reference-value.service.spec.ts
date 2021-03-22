import { TestBed } from '@angular/core/testing';

import { ReferenceValueService } from './reference-value.service';

describe('ReferenceValueService', () => {
  let service: ReferenceValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
