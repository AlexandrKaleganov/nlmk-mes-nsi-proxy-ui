import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDocumentMaterialLinkComponent } from './filter-document-material-link.component';

describe('FilterDocumentMaterialLinkComponent', () => {
  let component: FilterDocumentMaterialLinkComponent;
  let fixture: ComponentFixture<FilterDocumentMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDocumentMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDocumentMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
