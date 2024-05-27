import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    HttpClientModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private http: HttpClient, private router : Router) { }

  private baseUrl = 'http://localhost:3000/users';


  login(): void {
   this.loginTrai(this.username, this.password)
      .then(loggedIn => {
        if (loggedIn) {
this.router.navigateByUrl("/dashboard")
          console.log("bien authantifie");
        } else {
          this.loginError = true;
          console.log("error");
        }
      });
  }

  loginTrai(username: string, password: string): Promise<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}?username=${username}&password=${password}`)
      .toPromise()
      .then(users => {
        // @ts-ignore
        return users.length > 0;
      })
      .catch(error => {
        console.error('Error:', error);
        return false;
      });
  }
}
