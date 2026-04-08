import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joinnow } from './joinnow';

describe('Joinnow', () => {
  let component: Joinnow;
  let fixture: ComponentFixture<Joinnow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Joinnow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Joinnow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
