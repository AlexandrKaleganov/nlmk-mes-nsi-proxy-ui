import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMaterialLinkComponent } from './class-material-link.component';

describe('ClassMaterialLinkComponent', () => {
  let component: ClassMaterialLinkComponent;
  let fixture: ComponentFixture<ClassMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
