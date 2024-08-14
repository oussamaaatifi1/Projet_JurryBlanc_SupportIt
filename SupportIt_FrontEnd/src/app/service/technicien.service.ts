import { Injectable } from '@angular/core';
import { Technicien } from '../Model/Technicien';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  constructor(private httpClient : HttpClient) { }

  private BaseURL = "http://localhost:8084/api/techniciens"

  getListtechnicien() : Observable<Technicien[]> {
    return this.httpClient.get<Technicien[]>(`${this.BaseURL}`);
  }
}
