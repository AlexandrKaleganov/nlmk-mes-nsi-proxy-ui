import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStructureCompanyComponent } from './delete-structure-company.component';

describe('DeleteStructureCompanyComponent', () => {
  let component: DeleteStructureCompanyComponent;
  let fixture: ComponentFixture<DeleteStructureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStructureCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStructureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
