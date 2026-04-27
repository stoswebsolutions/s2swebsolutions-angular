import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-whatsapp-chat',
  imports: [],
  templateUrl: './whatsapp-chat.html',
  styleUrl: './whatsapp-chat.css',
})
export class WhatsappChat {
isOpen = false;

  message = encodeURIComponent("Hi, I want internship details");

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
