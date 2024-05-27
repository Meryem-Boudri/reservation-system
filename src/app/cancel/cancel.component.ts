import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-cancel',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './cancel.component.html',
  styleUrl: './cancel.component.css'
})
export class CancelComponent {

}
