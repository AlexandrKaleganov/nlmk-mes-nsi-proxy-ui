import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQualityIndicatorComponent } from './delete-quality-indicator.component';

describe('DeleteResourceComponent', () => {
  let component: DeleteQualityIndicatorComponent;
  let fixture: ComponentFixture<DeleteQualityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQualityIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQualityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
