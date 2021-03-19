import { TestBed } from '@angular/core/testing';

import { StructureCompanyMaterialLinkService } from './structure-company-material-link.service';

describe('StructureCompanyMaterialLinkService', () => {
  let service: StructureCompanyMaterialLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureCompanyMaterialLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
