import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logodesigning } from './logodesigning';

describe('Logodesigning', () => {
  let component: Logodesigning;
  let fixture: ComponentFixture<Logodesigning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logodesigning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logodesigning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
