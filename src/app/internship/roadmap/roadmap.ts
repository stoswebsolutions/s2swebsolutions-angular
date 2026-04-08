import { Component } from '@angular/core';
import { Foot } from "../foot/foot";
import { Head } from "../head/head";

@Component({
  selector: 'app-roadmap',
  imports: [Foot, Head],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {

}
