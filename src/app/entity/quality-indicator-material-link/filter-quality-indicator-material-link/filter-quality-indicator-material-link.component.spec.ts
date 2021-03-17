import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterQualityIndicatorMaterialLinkComponent } from './filter-quality-indicator-material-link.component';

describe('FilterQualityIndicatorMaterialLinkComponent', () => {
  let component: FilterQualityIndicatorMaterialLinkComponent;
  let fixture: ComponentFixture<FilterQualityIndicatorMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterQualityIndicatorMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterQualityIndicatorMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
