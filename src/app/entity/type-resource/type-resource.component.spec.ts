import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeResourceComponent } from './type-resource.component';

describe('TypeResourceComponent', () => {
  let component: TypeResourceComponent;
  let fixture: ComponentFixture<TypeResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
