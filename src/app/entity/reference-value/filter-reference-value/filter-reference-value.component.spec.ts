import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterReferenceValueComponent } from './filter-reference-value.component';

describe('FilterReferenceValueComponent', () => {
  let component: FilterReferenceValueComponent;
  let fixture: ComponentFixture<FilterReferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterReferenceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterReferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
