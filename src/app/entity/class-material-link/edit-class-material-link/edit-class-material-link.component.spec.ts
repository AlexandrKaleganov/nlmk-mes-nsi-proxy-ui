import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassMaterialLinkComponent } from './edit-class-material-link.component';

describe('EditClassMaterialLinkComponent', () => {
  let component: EditClassMaterialLinkComponent;
  let fixture: ComponentFixture<EditClassMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
