import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section1 } from '../header/home/section1/section1';


@Component({
  selector: 'app-websitedesign',
  imports: [Header,Footer,],
  templateUrl: './websitedesign.html',
  styleUrl: './websitedesign.css',
})
export class Websitedesign {

}
