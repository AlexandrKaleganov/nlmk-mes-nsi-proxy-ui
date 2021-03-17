import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeMaterialLinkComponent } from './delete-type-material-link.component';

describe('DeleteResourceComponent', () => {
  let component: DeleteTypeMaterialLinkComponent;
  let fixture: ComponentFixture<DeleteTypeMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
