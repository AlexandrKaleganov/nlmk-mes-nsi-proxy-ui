import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeResourceComponent } from './edit-type-resource.component';

describe('EditTypeResourceComponent', () => {
  let component: EditTypeResourceComponent;
  let fixture: ComponentFixture<EditTypeResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
