import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassMaterialLinkComponent } from './delete-class-material-link.component';

describe('DeleteClassMaterialLinkComponent', () => {
  let component: DeleteClassMaterialLinkComponent;
  let fixture: ComponentFixture<DeleteClassMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
