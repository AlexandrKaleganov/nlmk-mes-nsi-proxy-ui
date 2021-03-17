import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQualityIndicatorMaterialLinkComponent } from './delete-quality-indicator-material-link.component';

describe('DeleteQualityIndicatorMaterialLinkComponent', () => {
  let component: DeleteQualityIndicatorMaterialLinkComponent;
  let fixture: ComponentFixture<DeleteQualityIndicatorMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQualityIndicatorMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQualityIndicatorMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
