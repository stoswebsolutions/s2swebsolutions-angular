import { Component } from '@angular/core';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { Head } from "../head/head";
import { Foot } from "../foot/foot";


@Component({
  selector: 'app-joinnow',
  imports: [ Head, Foot],
  templateUrl: './joinnow.html',
  styleUrl: './joinnow.css',
})
export class Joinnow {

}
