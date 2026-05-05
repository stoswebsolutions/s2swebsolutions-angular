import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-seo',
  imports: [Header,Footer,],
  templateUrl: './seo.html',
  styleUrl: './seo.css',
})
export class Seo {
  readonly imageBaseUrl = environment.apiBaseUrl;

}
