import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section6 } from '../header/home/section6/section6';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,Header,Footer,Section6],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
