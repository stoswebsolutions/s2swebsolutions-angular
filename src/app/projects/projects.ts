import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Section5 } from '../header/home/section5/section5';
import { Section6 } from '../header/home/section6/section6';

@Component({
  selector: 'app-projects',
  imports: [RouterLink,Header,Footer,Section5,Section6],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
