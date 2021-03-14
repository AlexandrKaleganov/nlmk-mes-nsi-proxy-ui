import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarkResourceComponent } from './edit-mark-resource.component';

describe('EditMarkResourceComponent', () => {
  let component: EditMarkResourceComponent;
  let fixture: ComponentFixture<EditMarkResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMarkResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarkResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
