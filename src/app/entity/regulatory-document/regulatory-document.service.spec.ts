import { TestBed } from '@angular/core/testing';

import { RegulatoryDocumentService } from './regulatory-document.service';

describe('RegulatoryDocumentService', () => {
  let service: RegulatoryDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulatoryDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
