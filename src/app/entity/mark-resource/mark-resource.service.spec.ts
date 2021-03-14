import { TestBed } from '@angular/core/testing';

import { MarkResourceService } from './mark-resource.service';

describe('MarkResourceService', () => {
  let service: MarkResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
