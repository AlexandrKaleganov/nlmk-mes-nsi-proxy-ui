import { TestBed } from '@angular/core/testing';

import { StructureCompanyService } from './structure-company.service';

describe('StructureCompanyService', () => {
  let service: StructureCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
