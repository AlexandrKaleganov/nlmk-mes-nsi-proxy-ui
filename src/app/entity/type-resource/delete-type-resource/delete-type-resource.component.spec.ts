import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeResourceComponent } from './delete-type-resource.component';

describe('DeleteTypeResourceComponent', () => {
  let component: DeleteTypeResourceComponent;
  let fixture: ComponentFixture<DeleteTypeResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
