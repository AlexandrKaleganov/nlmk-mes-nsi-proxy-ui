import { TestBed } from '@angular/core/testing';

import { ClassResourceService } from './class-resource.service';

describe('ClassResourceService', () => {
  let service: ClassResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
