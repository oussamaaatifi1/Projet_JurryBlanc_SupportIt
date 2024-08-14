import { Injectable } from '@angular/core';
import { Pannes } from '../Model/Pannes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private BaseURL = "http://localhost:8084/api/v1/auth/Admin/panne";

  constructor(private httpClient: HttpClient) {}

  getPanneList(): Observable<Pannes[]> {
    return this.httpClient.get<Pannes[]>(`${this.BaseURL}/all`);
  }
  createPannes(pannes : Pannes) : Observable<Object> {
    return this.httpClient.post(`${this.BaseURL}/add`,pannes);
  }

  updatePanne(panneId: number, pannes: Pannes): Observable<Pannes> {
    return this.httpClient.put<Pannes>(`${this.BaseURL}/edit/${panneId}`,pannes);
  }

  deletePanne(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.BaseURL}/delete/${id}`);
  }
}
