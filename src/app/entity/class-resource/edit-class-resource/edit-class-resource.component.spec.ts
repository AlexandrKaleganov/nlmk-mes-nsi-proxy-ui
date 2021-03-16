import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassResourceComponent } from './edit-class-resource.component';

describe('EditTypeResourceComponent', () => {
  let component: EditClassResourceComponent;
  let fixture: ComponentFixture<EditClassResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
