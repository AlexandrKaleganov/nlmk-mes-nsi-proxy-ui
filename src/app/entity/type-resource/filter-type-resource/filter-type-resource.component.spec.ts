import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeResourceComponent } from './filter-type-resource.component';

describe('FilterTypeResourceComponent', () => {
  let component: FilterTypeResourceComponent;
  let fixture: ComponentFixture<FilterTypeResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTypeResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
