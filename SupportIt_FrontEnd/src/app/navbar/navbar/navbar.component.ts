import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Model/Admin';
import { Role } from 'src/app/Model/enum/Role';
import { Utilisateurs } from 'src/app/Model/Utilisateurs';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';  // Import the user service

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  utilisateur: Utilisateurs[] = [];
nom: any;
email: any;
role: Role | null | undefined;


  constructor(
    private router: Router,
    private authService: AuthentificationService,
    private userService: UtilisateurService // Inject the user service
  ) {}

  ngOnInit(): void {
    this.getEmail();
    this.nom = this.authService.getNom();
    this.email = this.authService.getEmail();
  }

  getEmail(): void {
    this.authService.getEmail()
  }

  registerTechnicien(): void {
    this.router.navigate(['/register/tech']);
  }

  Register(): void {
    this.router.navigate(['/register']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isAdmin(): boolean {
    return this.role?.toString() === Role[Role.ADMIN];
  }
  isTechnician(): boolean {
    return this.role?.toString() === Role[Role.TECHNICIEN];
  }
  isUser(): boolean {
    return this.role?.toString() === Role[Role.USER];
  }

  addPannes(): void {
    this.router.navigate(['/pannes/add']);
  }
}
