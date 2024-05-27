import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

}
