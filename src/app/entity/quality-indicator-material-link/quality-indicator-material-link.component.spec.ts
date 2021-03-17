import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIndicatorMaterialLinkComponent } from './quality-indicator-material-link.component';

describe('TypeMaterialLinkComponent', () => {
  let component: QualityIndicatorMaterialLinkComponent;
  let fixture: ComponentFixture<QualityIndicatorMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityIndicatorMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityIndicatorMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
