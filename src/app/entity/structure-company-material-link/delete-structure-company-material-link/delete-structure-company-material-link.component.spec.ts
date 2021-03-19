import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStructureCompanyMaterialLinkComponent } from './delete-structure-company-material-link.component';

describe('DeleteStructureCompanyMaterialLinkComponent', () => {
  let component: DeleteStructureCompanyMaterialLinkComponent;
  let fixture: ComponentFixture<DeleteStructureCompanyMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStructureCompanyMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStructureCompanyMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
