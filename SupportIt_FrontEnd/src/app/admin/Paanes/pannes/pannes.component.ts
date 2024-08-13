import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pannes } from 'src/app/Model/Pannes';
import { PanneService } from 'src/app/service/panne.service';

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit {

  pannes : Pannes[] = [];

  constructor(private pannesSerivce : PanneService, private router : Router) {}

  ngOnInit(): void {
      this.getPanneList();
  }
  getPanneList() : void{
    this.pannesSerivce.getPanneList().subscribe(data => {
      this.pannes = data;
    })
  }

  addPannes(): void {
    this.router.navigate(['/pannes/add']);
  }

  editPannes(panneId: number): void {
    this.router.navigate(['/pannes/edit',panneId ]);
  }
}
