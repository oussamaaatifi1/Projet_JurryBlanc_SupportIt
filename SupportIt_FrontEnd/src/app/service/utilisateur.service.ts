import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateurs } from '../Model/Utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient : HttpClient) { }

  private BaseURL = "http://localhost:8084/api/utilisateurs"

  getListutilisateur() : Observable<Utilisateurs[]> {
    return this.httpClient.get<Utilisateurs[]>(`${this.BaseURL}`);
  }
}
