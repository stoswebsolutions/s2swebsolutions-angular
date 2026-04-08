import { Component } from '@angular/core';
import { Head } from "../head/head";
import { Foot } from "../foot/foot";
import { Internship } from "../internship";
import { Section } from "../section/section";

@Component({
  selector: 'app-hoome',
  imports: [Head, Foot, Internship, Section],
  templateUrl: './hoome.html',
  styleUrl: './hoome.css',
})
export class Hoome {

}
