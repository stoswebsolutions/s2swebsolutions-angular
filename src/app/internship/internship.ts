import { Component } from '@angular/core';

import { Section } from "./section/section";
import { Domain } from './domain/domain';import { Roadmap } from "./roadmap/roadmap";
import { Joinnow } from "./joinnow/joinnow";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-internship',
  imports: [Section, Roadmap, Joinnow, Header, Footer, Domain],
  templateUrl: './internship.html',
styleUrls: ['./internship.css'], 
})
export class Internship {

}
