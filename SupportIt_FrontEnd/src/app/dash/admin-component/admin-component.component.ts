import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})
export class AdminComponentComponent implements OnInit{


  constructor(private router : Router,private authService : AuthentificationService){}
  ngOnInit(): void {
  }

  Register(): void {
    this.router.navigate(['/register']);
  }
  registerTechnicien(): void {
    this.router.navigate(['/register/tech']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
