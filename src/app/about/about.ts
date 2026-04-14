import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section1 } from '../header/home/section1/section1';

@Component({
  selector: 'app-about',
  imports: [RouterLink,Header,Footer,Section1],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
