import { TestBed } from '@angular/core/testing';

import { DocumentMaterialLinkService } from './document-material-link.service';

describe('DocumentMaterialLinkService', () => {
  let service: DocumentMaterialLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentMaterialLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
