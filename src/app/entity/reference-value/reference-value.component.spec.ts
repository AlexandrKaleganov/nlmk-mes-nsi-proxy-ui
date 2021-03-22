import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceValueComponent } from './reference-value.component';

describe('ReferenceValueComponent', () => {
  let component: ReferenceValueComponent;
  let fixture: ComponentFixture<ReferenceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
