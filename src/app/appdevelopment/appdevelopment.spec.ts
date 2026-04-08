import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdevelopment } from './appdevelopment';

describe('Appdevelopment', () => {
  let component: Appdevelopment;
  let fixture: ComponentFixture<Appdevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appdevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
