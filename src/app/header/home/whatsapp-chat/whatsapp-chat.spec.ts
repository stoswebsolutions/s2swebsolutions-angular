import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappChat } from './whatsapp-chat';

describe('WhatsappChat', () => {
  let component: WhatsappChat;
  let fixture: ComponentFixture<WhatsappChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
