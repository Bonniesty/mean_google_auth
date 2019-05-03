

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserUrl {

  constructor(private http: HttpClient) { }

  dogUrl = 'http://localhost:3000/dog';

  getDog() {

    return this.http.get(this.dogUrl);
  }
}
