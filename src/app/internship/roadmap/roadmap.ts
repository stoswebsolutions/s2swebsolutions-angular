import { Component } from '@angular/core';
import { Foot } from "../foot/foot";
import { Head } from "../head/head";
import { environment } from '../../../environments/environment.prod';



@Component({
  selector: 'app-roadmap',
  imports: [Foot, Head],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css',
})
export class Roadmap {
readonly imageBaseUrl = environment.apiBaseUrl;
}
