import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualityIndicatorMaterialLinkComponent } from './edit-quality-indicator-material-link.component';

describe('EditQualityIndicatorMaterialLinkComponent', () => {
  let component: EditQualityIndicatorMaterialLinkComponent;
  let fixture: ComponentFixture<EditQualityIndicatorMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualityIndicatorMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQualityIndicatorMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
