import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-webhosting',
  imports: [Header,Footer,],
  templateUrl: './webhosting.html',
  styleUrl: './webhosting.css',
})
export class Webhosting {

}
