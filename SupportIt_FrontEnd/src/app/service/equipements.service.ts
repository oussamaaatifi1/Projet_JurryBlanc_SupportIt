import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../Model/Equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementsService {
  // updateEquipment(equipementId: number, value: any) {
  //   throw new Error('Method not implemented.');
  // }

  private BaseURL = "http://localhost:8084/api/v1/auth/Admin/equipements";

  constructor(private httpClient: HttpClient) {}


  getEquipementList(): Observable<Equipement[]> {
    return this.httpClient.get<Equipement[]>(`${this.BaseURL}/all`);
  }
  
  createEquipements(equipement: Equipement): Observable<Object> {
    return this.httpClient.post(`${this.BaseURL}/add`, equipement);
  }

  updateEquipment(equipementId: number, equipment: Equipement): Observable<Equipement> {
    return this.httpClient.put<Equipement>(`${this.BaseURL}/edit/${equipementId}`, equipment);
  }

  getEquipmentById(id: number): Observable<Equipement> {
    return this.httpClient.get<Equipement>(`${this.BaseURL}/${id}`);
  }

  deleteEquipment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.BaseURL}/delete/${id}`);
  }
}
