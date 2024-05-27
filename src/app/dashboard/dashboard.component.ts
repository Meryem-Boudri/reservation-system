import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import { Router } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    HttpClientModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  sessions: any[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions() {
    this.http.get<any[]>(`http://localhost:3000/sessions`).subscribe((sessions: any[]) => {
      this.sessions = sessions;
      console.log(sessions);
    });
  }

  reserveSession(session: any) {
    // Logique pour réserver une séance
    console.log(`Réserver la séance : ${session.name}`);
  }

  cancelReservation(session: any) {
    // Logique pour annuler une réservation
    console.log(`Annuler la réservation pour la séance : ${session.name}`);
  }


}
