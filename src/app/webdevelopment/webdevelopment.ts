import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import { Section1 } from '../header/home/section1/section1';
import { Webhosting } from "../webhosting/webhosting";

@Component({
  selector: 'app-webdevelopment',
  imports: [RouterLink, Header, Footer, Webhosting],
  templateUrl: './webdevelopment.html',
  styleUrl: './webdevelopment.css',
})
export class Webdevelopment {

}
