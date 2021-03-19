import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureCompanyComponent } from './structure-company.component';

describe('StructureCompanyComponent', () => {
  let component: StructureCompanyComponent;
  let fixture: ComponentFixture<StructureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
