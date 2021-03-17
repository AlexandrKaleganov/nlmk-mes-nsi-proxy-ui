import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClassMaterialLinkComponent } from './filter-class-material-link.component';

describe('FilterClassMaterialLinkComponent', () => {
  let component: FilterClassMaterialLinkComponent;
  let fixture: ComponentFixture<FilterClassMaterialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClassMaterialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClassMaterialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
