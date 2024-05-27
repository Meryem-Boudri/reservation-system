import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminControleurComponent } from './admin-controleur/admin-controleur.component';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {CancelComponent} from "./cancel/cancel.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'admin-controleur', component: AdminControleurComponent },
 { path: 'navbar', component:NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
