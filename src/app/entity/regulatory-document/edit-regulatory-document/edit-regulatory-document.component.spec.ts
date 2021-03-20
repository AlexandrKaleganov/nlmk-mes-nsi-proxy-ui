import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegulatoryDocumentComponent } from './edit-regulatory-document.component';

describe('EditRegulatoryDocumentComponent', () => {
  let component: EditRegulatoryDocumentComponent;
  let fixture: ComponentFixture<EditRegulatoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegulatoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegulatoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
