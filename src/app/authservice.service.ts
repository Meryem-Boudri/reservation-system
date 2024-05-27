import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<boolean> {
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
