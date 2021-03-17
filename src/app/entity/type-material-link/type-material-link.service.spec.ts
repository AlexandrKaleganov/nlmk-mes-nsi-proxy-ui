import { TestBed } from '@angular/core/testing';

import { TypeMaterialLinkService } from './type-material-link.service';

describe('TypeMaterialLinkService', () => {
  let service: TypeMaterialLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMaterialLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
