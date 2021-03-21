import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentMaterialLinkComponent } from './edit-document-material-link.component';

describe('EditDocumentMaterialLinkComponent', () => {
  let component: EditDocumentMaterialLinkComponent;
  let fixture: ComponentFixture<EditDocumentMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDocumentMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocumentMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
