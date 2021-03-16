import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassResourceComponent } from './class-resource.component';

describe('ClassResourceComponent', () => {
  let component: ClassResourceComponent;
  let fixture: ComponentFixture<ClassResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
