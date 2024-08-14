import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/Model/Utilisateurs';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

  utilisateurs : Utilisateurs[] = [];


  constructor(private userService : UtilisateurService ,private router : Router){}

  ngOnInit(): void {
    this.getListutilisateur();
  }

  getListutilisateur() : void {
    this.userService.getListutilisateur().subscribe(data => {
      this.utilisateurs = data;
    });
  }
}
