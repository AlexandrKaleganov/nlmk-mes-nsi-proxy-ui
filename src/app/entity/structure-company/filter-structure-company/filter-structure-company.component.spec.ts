import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStructureCompanyComponent } from './filter-structure-company.component';

describe('FilterStructureCompanyComponent', () => {
  let component: FilterStructureCompanyComponent;
  let fixture: ComponentFixture<FilterStructureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStructureCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStructureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
