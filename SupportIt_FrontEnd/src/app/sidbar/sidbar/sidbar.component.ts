import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/Model/enum/Role';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent {

  currentSection: string = 'dashboard';



  constructor(private router : Router,private authService : AuthentificationService){}
  loadContent(section: string) {
    this.currentSection = section;
    this.router.navigate([`/${section}`]);
  }

  role: Role | null | undefined;


  ngOnInit(): void {
    this.role = this.authService.getRole();
    //console.log(this.role?.toString() === Role[Role.ADMIN]);

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

  addTicket() : void {
    this.router.navigate(['/ticketss'])
  }
}

