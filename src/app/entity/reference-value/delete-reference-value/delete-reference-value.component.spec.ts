import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReferenceValueComponent } from './delete-reference-value.component';

describe('DeleteReferenceValueComponent', () => {
  let component: DeleteReferenceValueComponent;
  let fixture: ComponentFixture<DeleteReferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReferenceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
