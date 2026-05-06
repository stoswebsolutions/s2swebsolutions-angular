import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
readonly imageBaseUrl = environment.apiBaseUrl; // Replace with your actual base URL
}
