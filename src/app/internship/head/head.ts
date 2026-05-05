import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-head',
  imports: [RouterLink],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {
readonly imageBaseUrl = environment.apiBaseUrl; // Replace with your actual base URL
}
