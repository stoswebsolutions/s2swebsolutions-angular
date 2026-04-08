import { Component } from '@angular/core';
import { Head } from "./head/head";
import { Foot } from './foot/foot';
import { Section } from "./section/section";
import { Domain } from './domain/domain';

@Component({
  selector: 'app-internship',
  imports: [Head, Foot, Section],
  templateUrl: './internship.html',
styleUrls: ['./internship.css'], 
})
export class Internship {

}
