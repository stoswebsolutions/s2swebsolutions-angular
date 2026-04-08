import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section1 } from '../header/home/section1/section1';
import { Section6 } from '../header/home/section6/section6';

@Component({
  selector: 'app-websitedesign',
  imports: [RouterLink,Header,Footer,Section6],
  templateUrl: './websitedesign.html',
  styleUrl: './websitedesign.css',
})
export class Websitedesign {

}
