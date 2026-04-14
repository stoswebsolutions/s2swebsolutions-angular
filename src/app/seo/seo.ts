import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-seo',
  imports: [RouterLink,Header,Footer,],
  templateUrl: './seo.html',
  styleUrl: './seo.css',
})
export class Seo {

}
