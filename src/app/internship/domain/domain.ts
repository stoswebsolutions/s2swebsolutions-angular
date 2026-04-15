import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from "../../header/home/home";

import { Foot } from "../foot/foot";

@Component({
  selector: 'app-domain',
  imports: [ Foot,],
  templateUrl: './domain.html',
  styleUrl: './domain.css',
})
export class Domain {

}
