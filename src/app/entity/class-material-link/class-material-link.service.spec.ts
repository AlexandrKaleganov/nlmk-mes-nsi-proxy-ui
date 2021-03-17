import { TestBed } from '@angular/core/testing';

import { ClassMaterialLinkService } from './class-material-link.service';

describe('ClassMaterialLinkService', () => {
  let service: ClassMaterialLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassMaterialLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
