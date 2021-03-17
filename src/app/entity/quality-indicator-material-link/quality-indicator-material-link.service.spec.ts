import { TestBed } from '@angular/core/testing';

import { QualityIndicatorMaterialLinkService } from './quality-indicator-material-link.service';

describe('QualityIndicatorMaterialLinkService', () => {
  let service: QualityIndicatorMaterialLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityIndicatorMaterialLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
