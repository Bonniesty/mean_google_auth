

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserName {

  constructor(private http: HttpClient) { }

  private nameUrl = '../name.json';

  getName() {
    return this.http.get(this.nameUrl);
  }
}
