import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSupplierComponent } from './filter-supplier.component';

describe('FilterSupplierComponent', () => {
  let component: FilterSupplierComponent;
  let fixture: ComponentFixture<FilterSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
