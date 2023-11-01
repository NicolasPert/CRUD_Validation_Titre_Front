import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>('http://localhost:3000/api/categorie');
  }
}
