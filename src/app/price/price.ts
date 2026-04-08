import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section4 } from '../header/home/section4/section4';
import { Section6 } from '../header/home/section6/section6';

@Component({
  selector: 'app-price',
  imports: [RouterLink,Header,Footer,Section4,Section6],
  templateUrl: './price.html',
  styleUrl: './price.css',
})
export class Price {

}
