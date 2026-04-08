import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoome } from './hoome';

describe('Hoome', () => {
  let component: Hoome;
  let fixture: ComponentFixture<Hoome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
