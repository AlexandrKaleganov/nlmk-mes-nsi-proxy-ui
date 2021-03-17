import { TestBed } from '@angular/core/testing';

import { QualityIndicatorService } from './quality-indicator.service';

describe('QualityIndicatorService', () => {
  let service: QualityIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualityIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
