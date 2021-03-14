import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarkResourceComponent } from './delete-mark-resource.component';

describe('DeleteMarkResourceComponent', () => {
  let component: DeleteMarkResourceComponent;
  let fixture: ComponentFixture<DeleteMarkResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMarkResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarkResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
