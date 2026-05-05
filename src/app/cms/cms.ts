import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-cms',
  imports: [Header,Footer],
  templateUrl: './cms.html',
  styleUrl: './cms.css',
})
export class Cms {
  readonly imageBaseUrl = environment.apiBaseUrl;
}
