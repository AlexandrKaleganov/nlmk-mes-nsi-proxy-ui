import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassResourceComponent } from './delete-class-resource.component';

describe('DeleteTypeResourceComponent', () => {
  let component: DeleteClassResourceComponent;
  let fixture: ComponentFixture<DeleteClassResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
