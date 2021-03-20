import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegulatoryDocumentComponent } from './delete-regulatory-document.component';

describe('DeleteRegulatoryDocumentComponent', () => {
  let component: DeleteRegulatoryDocumentComponent;
  let fixture: ComponentFixture<DeleteRegulatoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRegulatoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRegulatoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
