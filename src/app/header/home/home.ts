import { Component, HostListener } from '@angular/core';
import { Header } from '../header';
import { RouterLink, RouterModule } from '@angular/router';
import { Section1 } from './section1/section1';
import { Section2 } from './section2/section2';
import { Section3 } from './section3/section3';
import { Section4 } from './section4/section4';

import { Footer } from '../../footer/footer';
import { About } from '../../about/about';
import { Price } from '../../price/price';
import { Projects } from '../../projects/projects';
import { Contact } from '../../contact/contact';

import { Internship } from '../../internship/internship';
import { WhatsappChat } from "./whatsapp-chat/whatsapp-chat";
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-home',
  imports: [Header, Section1, Section2, Section4, Footer, Projects,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
isOpen = false;

  message = encodeURIComponent("Hi, I want internship details");

  toggle() {
    this.isOpen = !this.isOpen;
  }
  showScroll = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showScroll = window.scrollY > 200;
}
scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
readonly imageBaseUrl = environment.apiBaseUrl;
}
