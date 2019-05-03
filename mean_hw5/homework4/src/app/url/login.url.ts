

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginUrl {

  constructor(private http: HttpClient) { }

  loginUrl = 'http://localhost:3000/auth/google';

  getLogin() {

    return this.http.get(this.loginUrl);
  }
}
