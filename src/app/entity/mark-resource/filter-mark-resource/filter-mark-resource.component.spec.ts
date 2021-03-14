import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMarkResourceComponent } from './filter-mark-resource.component';

describe('FilterMarkResourceComponent', () => {
  let component: FilterMarkResourceComponent;
  let fixture: ComponentFixture<FilterMarkResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMarkResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMarkResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
