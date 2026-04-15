import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-cms',
  imports: [Header,Footer],
  templateUrl: './cms.html',
  styleUrl: './cms.css',
})
export class Cms {

}
