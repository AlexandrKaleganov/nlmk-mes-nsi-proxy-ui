import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentMaterialLinkComponent } from './document-material-link.component';

describe('DocumentMaterialLinkComponent', () => {
  let component: DocumentMaterialLinkComponent;
  let fixture: ComponentFixture<DocumentMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
