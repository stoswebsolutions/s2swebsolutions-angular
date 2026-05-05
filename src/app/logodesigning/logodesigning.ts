import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-logodesigning',
  imports: [Header,Footer,],
  templateUrl: './logodesigning.html',
  styleUrl: './logodesigning.css',
})
export class Logodesigning {
readonly imageBaseUrl = environment.apiBaseUrl;
}
