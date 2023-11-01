import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';
import { LoginUtilisateur } from '../models/loginUtilisateur';
import { ReponseConnexion } from '../models/reponseConnexion';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private baseApiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }
  inscriptionUtilisateur(data: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(
      `${this.baseApiUrl}/auth/register`,
      data
    );
  }

  connexionUtilisateur(data: LoginUtilisateur): Observable<ReponseConnexion> {
    return this.http.post<ReponseConnexion>(
      `${this.baseApiUrl}/auth/login`,
      data
    );
  }

  getUtilisateur(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(
      `${this.baseApiUrl}/utilisateur`
    );
  }
}
