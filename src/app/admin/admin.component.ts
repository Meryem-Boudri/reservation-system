import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';  // Importer HttpClientModule
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  session = {
    date: '',
    jury: '',
    maxParticipants: 0
  };

  constructor(private http: HttpClient) { }

  scheduleSession() {
    this.http.post('http://localhost:3000/sessions', this.session)
      .subscribe(response => {
        console.log('Séance planifiée', response);
      });
  }
}
