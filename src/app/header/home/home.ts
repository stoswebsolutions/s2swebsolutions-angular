import { Component } from '@angular/core';
import { Header } from '../header';
import { RouterLink, RouterModule } from '@angular/router';
import { Section1 } from './section1/section1';
import { Section2 } from './section2/section2';
import { Section3 } from './section3/section3';
import { Section4 } from './section4/section4';
import { Section5 } from './section5/section5';
import { Footer } from '../../footer/footer';
import { About } from '../../about/about';
import { Price } from '../../price/price';
import { Projects } from '../../projects/projects';
import { Contact } from '../../contact/contact';
import { Section6 } from './section6/section6';
import { Internship } from '../../internship/internship';


@Component({
  selector: 'app-home',
  imports: [Header,Section1,Section2,Section3,Section4,Section5,Footer,About,Price,Projects,Contact,Section6,Internship],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
