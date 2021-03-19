import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructureCompanyMaterialLinkComponent } from './edit-structure-company-material-link.component';

describe('EditStructureCompanyMaterialLinkComponent', () => {
  let component: EditStructureCompanyMaterialLinkComponent;
  let fixture: ComponentFixture<EditStructureCompanyMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStructureCompanyMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStructureCompanyMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
