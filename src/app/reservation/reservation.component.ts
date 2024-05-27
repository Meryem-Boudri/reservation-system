import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, NavbarComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  sessions: any[] = [];
  reservation = {
    sessionId: null,
    name: '',
    email: ''
  };
  reservations: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>(`http://localhost:3000/sessions`).subscribe((sessions: any[]) => {
      this.sessions = sessions;
      console.log(sessions);
    });
    this.searchReservations();
  }

  searchReservations() {
    const name = "John Doe"; // Nom de l'utilisateur à rechercher
    this.http.get<any[]>(`http://localhost:3000/reservations?name=John Doe`).subscribe((reservations: any[]) => {
      this.reservations = reservations;
      console.log(this.reservations[0]);
    });
  }

  reserveSession() {
    const reservationData = {
      sessionId: this.reservation.sessionId,
      name: this.reservation.name,
      email: this.reservation.email,
      sessionName: this.sessions.find(session => session.id === this.reservation.sessionId)?.name || '',
      date: this.sessions.find(session => session.id === this.reservation.sessionId)?.date || '',
      time: this.sessions.find(session => session.id === this.reservation.sessionId)?.time || '',
      comfirmed:false
    };

    this.http.post<any>(`http://localhost:3000/reservations`, reservationData).subscribe(() => {
      alert("Reservation successful");
      this.searchReservations(); // Mettre à jour les réservations après l'ajout
    });
  }

  cancelReservation(id: number) {
    this.http.delete<any>(`http://localhost:3000/reservations/${id}`).subscribe(() => {
      console.log("Reservation canceled");
      alert("Reservation canceled");
      this.searchReservations(); // Mettre à jour les réservations après la suppression
    });
  }
}
