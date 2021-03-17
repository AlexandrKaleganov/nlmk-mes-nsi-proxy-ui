import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeMaterialLinkComponent } from './filter-type-material-link.component';

describe('FilterTypeMaterialLinkComponent', () => {
  let component: FilterTypeMaterialLinkComponent;
  let fixture: ComponentFixture<FilterTypeMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTypeMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypeMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
