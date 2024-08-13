import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getRole();
    if (this.authService.isLoggedIn() && role === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['/home']); // if not admin
      return false;
    }
  }
}
