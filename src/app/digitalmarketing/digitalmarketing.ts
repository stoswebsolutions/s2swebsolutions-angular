import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-digitalmarketing',
  imports: [Header,Footer,],
  templateUrl: './digitalmarketing.html',
  styleUrl: './digitalmarketing.css',
})
export class Digitalmarketing {

}
