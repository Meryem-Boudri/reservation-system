import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "../navbar/navbar.component";  // Importer CommonModule

@Component({
  selector: 'app-admin-controleur',
  standalone: true,
  imports: [CommonModule, NavbarComponent,HttpClientModule],  // Ajouter CommonModule aux imports
  templateUrl: './admin-controleur.component.html'
})
export class AdminControleurComponent implements OnInit {
  reservations :any[]= [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/reservations')
      .subscribe((reservations: any[]) => {
        this.reservations = reservations.filter(reservation => !reservation.confirmed);
      });
  }


  confirmReservation(reservationId: number) {
    this.http.patch(`http://localhost:3000/reservations/${reservationId}`, { confirmed: true })
      .subscribe(response => {
        console.log('Réservation confirmée', response);
        this.ngOnInit(); // Refresh reservations
      });
  }
  refuserReservation(reservationId: number) {
    this.http.patch(`http://localhost:3000/reservations/${reservationId}`, { confirmed: false })
      .subscribe(response => {
        console.log('Réservation confirmée', response);
        this.ngOnInit(); // Refresh reservations
      });
  }
}
