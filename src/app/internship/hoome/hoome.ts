import { Component } from '@angular/core';


import { Section } from "../section/section";
import { Roadmap } from "../roadmap/roadmap";
import { Domain } from "../domain/domain";
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-hoome',
  imports: [  Section, Roadmap, Domain, Header, Footer],
  templateUrl: './hoome.html',
  styleUrl: './hoome.css',
})
export class Hoome {

}
