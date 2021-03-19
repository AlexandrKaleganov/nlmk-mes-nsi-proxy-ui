import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureCompanyMaterialLinkComponent } from './structure-company-material-link.component';

describe('StructureCompanyMaterialLinkComponent', () => {
  let component: StructureCompanyMaterialLinkComponent;
  let fixture: ComponentFixture<StructureCompanyMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureCompanyMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureCompanyMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
