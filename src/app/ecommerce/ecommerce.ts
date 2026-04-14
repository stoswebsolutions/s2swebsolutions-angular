import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';


@Component({
  selector: 'app-ecommerce',
  imports: [RouterLink,Header,],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.css',
})
export class Ecommerce {

}
