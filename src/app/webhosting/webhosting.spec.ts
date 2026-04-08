import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webhosting } from './webhosting';

describe('Webhosting', () => {
  let component: Webhosting;
  let fixture: ComponentFixture<Webhosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webhosting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webhosting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
