import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeMaterialLinkComponent } from './edit-type-material-link.component';

describe('EditTypeMaterialLinkComponent', () => {
  let component: EditTypeMaterialLinkComponent;
  let fixture: ComponentFixture<EditTypeMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
