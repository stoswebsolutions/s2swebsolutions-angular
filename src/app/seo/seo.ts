import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section6 } from '../header/home/section6/section6';

@Component({
  selector: 'app-seo',
  imports: [RouterLink,Header,Footer,Section6],
  templateUrl: './seo.html',
  styleUrl: './seo.css',
})
export class Seo {

}
