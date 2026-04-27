import { Component } from '@angular/core';


import { Section } from "../section/section";
import { Roadmap } from "../roadmap/roadmap";
import { Domain } from "../domain/domain";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { Head } from "../head/head";
import { Foot } from "../foot/foot";
import { Joinnow } from "../joinnow/joinnow";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hoome',
  imports: [Head, Foot, Section, ],
  templateUrl: './hoome.html',
  styleUrl: './hoome.css',
})
export class Hoome {

}
