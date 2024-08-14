import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from 'src/app/Model/Technicien';
import { TechnicienService } from 'src/app/service/technicien.service';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {

  techniciens : Technicien[] = [];
  constructor(private userService : TechnicienService ,private router : Router){}

  ngOnInit(): void {
    this.getListtechnicien();
  }

  getListtechnicien() : void {
    this.userService.getListtechnicien().subscribe(data => {
      this.techniciens = data;
    });
  }
}
