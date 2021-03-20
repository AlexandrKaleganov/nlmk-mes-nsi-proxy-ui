import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryDocumentComponent } from './regulatory-document.component';

describe('RegulatoryDocumentComponent', () => {
  let component: RegulatoryDocumentComponent;
  let fixture: ComponentFixture<RegulatoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
