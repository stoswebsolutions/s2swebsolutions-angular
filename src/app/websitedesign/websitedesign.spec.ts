import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Websitedesign } from './websitedesign';

describe('Websitedesign', () => {
  let component: Websitedesign;
  let fixture: ComponentFixture<Websitedesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Websitedesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Websitedesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
