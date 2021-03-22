import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReferenceValueComponent } from './edit-reference-value.component';

describe('EditReferenceValueComponent', () => {
  let component: EditReferenceValueComponent;
  let fixture: ComponentFixture<EditReferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReferenceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
