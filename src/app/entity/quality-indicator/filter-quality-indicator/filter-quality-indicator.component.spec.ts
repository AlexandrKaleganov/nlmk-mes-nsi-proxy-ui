import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterQualityIndicatorComponent } from './filter-quality-indicator.component';

describe('FilterResourceComponent', () => {
  let component: FilterQualityIndicatorComponent;
  let fixture: ComponentFixture<FilterQualityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterQualityIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterQualityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
