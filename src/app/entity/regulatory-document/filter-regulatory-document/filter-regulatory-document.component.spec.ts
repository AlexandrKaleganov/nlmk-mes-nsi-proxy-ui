import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRegulatoryDocumentComponent } from './filter-regulatory-document.component';

describe('FilterRegulatoryDocumentComponent', () => {
  let component: FilterRegulatoryDocumentComponent;
  let fixture: ComponentFixture<FilterRegulatoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRegulatoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRegulatoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
