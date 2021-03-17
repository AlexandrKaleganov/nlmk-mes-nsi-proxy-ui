import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualityIndicatorComponent } from './edit-quality-indicator.component';

describe('EditResourceComponent', () => {
  let component: EditQualityIndicatorComponent;
  let fixture: ComponentFixture<EditQualityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualityIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQualityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
