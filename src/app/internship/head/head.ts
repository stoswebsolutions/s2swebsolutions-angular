import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Domain } from 'node:domain';

@Component({
  selector: 'app-head',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {

}
