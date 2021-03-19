import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStructureCompanyComponent } from './edit-structure-company.component';

describe('EditStructureCompanyComponent', () => {
  let component: EditStructureCompanyComponent;
  let fixture: ComponentFixture<EditStructureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStructureCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStructureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
