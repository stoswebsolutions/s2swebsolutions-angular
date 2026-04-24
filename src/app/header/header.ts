import { Component } from '@angular/core';
import { Home } from './home/home';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
