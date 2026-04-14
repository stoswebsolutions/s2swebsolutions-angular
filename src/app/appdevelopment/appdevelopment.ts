import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-appdevelopment',
  imports: [RouterLink,Header,Footer,],
  templateUrl: './appdevelopment.html',
  styleUrl: './appdevelopment.css',
})
export class Appdevelopment {

}
