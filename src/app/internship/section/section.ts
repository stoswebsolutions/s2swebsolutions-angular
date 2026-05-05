import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-section',
  imports: [RouterLink],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
readonly imageBaseUrl = environment.apiBaseUrl;
}
