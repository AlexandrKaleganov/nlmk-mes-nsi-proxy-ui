import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMaterialLinkComponent } from './type-material-link.component';

describe('ResourceComponent', () => {
  let component: TypeMaterialLinkComponent;
  let fixture: ComponentFixture<TypeMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
