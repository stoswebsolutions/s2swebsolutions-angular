import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section5 } from '../header/home/section5/section5';
import { Section6 } from '../header/home/section6/section6';
import { Section1 } from '../header/home/section1/section1';

@Component({
  selector: 'app-webdevelopment',
  imports: [RouterLink,Header,Footer,Section1,Section6],
  templateUrl: './webdevelopment.html',
  styleUrl: './webdevelopment.css',
})
export class Webdevelopment {

}
