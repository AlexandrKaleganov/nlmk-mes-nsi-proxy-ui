import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkResourceComponent } from './mark-resource.component';

describe('MarkResourceComponent', () => {
  let component: MarkResourceComponent;
  let fixture: ComponentFixture<MarkResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
