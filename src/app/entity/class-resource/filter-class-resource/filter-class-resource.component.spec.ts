import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClassResourceComponent } from './filter-class-resource.component';

describe('FilterClassResourceComponent', () => {
  let component: FilterClassResourceComponent;
  let fixture: ComponentFixture<FilterClassResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterClassResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClassResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
