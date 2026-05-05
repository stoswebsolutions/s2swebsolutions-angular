import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-ecommerce',
  imports: [Header,],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.css',
})
export class Ecommerce {
  readonly imageBaseUrl = environment.apiBaseUrl;
}
