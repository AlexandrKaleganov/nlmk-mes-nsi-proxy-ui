import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStructureCompanyMaterialLinkComponent } from './filter-structure-company-material-link.component';

describe('FilterStructureCompanyMaterialLinkComponent', () => {
  let component: FilterStructureCompanyMaterialLinkComponent;
  let fixture: ComponentFixture<FilterStructureCompanyMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStructureCompanyMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStructureCompanyMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
