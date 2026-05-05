import { Component } from '@angular/core';
import { Home } from './home/home';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [ RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
readonly imageBaseUrl = environment.apiBaseUrl;
}
