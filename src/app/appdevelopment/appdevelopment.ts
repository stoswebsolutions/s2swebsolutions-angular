import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-appdevelopment',
  imports: [Header,Footer,],
  templateUrl: './appdevelopment.html',
  styleUrl: './appdevelopment.css',
})
export class Appdevelopment {
readonly imageBaseUrl = environment.apiBaseUrl;
}
