import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentMaterialLinkComponent } from './delete-document-material-link.component';

describe('DeleteDocumentMaterialLinkComponent', () => {
  let component: DeleteDocumentMaterialLinkComponent;
  let fixture: ComponentFixture<DeleteDocumentMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDocumentMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDocumentMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
