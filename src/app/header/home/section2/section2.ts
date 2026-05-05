import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section2',
  imports: [RouterLink],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {
 readonly imageBaseUrl = environment.apiBaseUrl;
}
