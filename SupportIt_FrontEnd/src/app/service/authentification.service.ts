import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { Role } from '../Model/enum/Role'; // Import Role enum
import { RegisterRequest } from '../Model/RegisterRequest';
import { Jwt } from '../Model/jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl = 'http://localhost:8084/api/v1/auth';
  private email: string | null = null;
  private role: Role | null = null; 

  constructor(private http: HttpClient, private router: Router) {}

  register(registerRequest :any): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/register/user`, registerRequest);
  }

  registerAdmin(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/register/registerAdmin`, request);
  }

  registerTechnicien(request: RegisterRequest): Observable<Jwt> {
    return this.http.post<Jwt>(`${this.apiUrl}/register/registerTechnicien`, request);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/authenticate`, { email, password }).pipe(
      tap(response => {
        this.saveToken(response.token);
        console.log('Token stored:', response.token);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        return throwError(error);
      })
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.setUserDataFromToken(token);
  }

  setUserDataFromToken(token: string): void {
    const decodedToken: any = this.decodeToken(token);
    console.log('Decoded Token:', decodedToken);
    this.email = decodedToken.sub;
    this.role = decodedToken.roles as Role; // Cast to Role enum
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  decodeToken(token: string): any {
    return jwtDecode(token);
  }

  getEmail(): string | null {
    if (!this.email) {
      const token = this.getToken();
      if (token) {
        this.email = this.decodeToken(token).sub;
      }
    }
    return this.email;
  }

  getRole(): Role | null {
    if (!this.role) {
      const token = this.getToken();
      if (token) {
        this.role = this.decodeToken(token).roles as Role; // Cast to Role enum
      }
    }
    return this.role;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.email = null;
    this.role = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
