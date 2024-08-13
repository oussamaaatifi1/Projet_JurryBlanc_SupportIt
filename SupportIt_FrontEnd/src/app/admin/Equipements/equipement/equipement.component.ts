import { Component, OnInit } from '@angular/core';
import { EquipementsService } from 'src/app/service/equipements.service';
import { Equipement } from 'src/app/Model/Equipement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {
  equipements: Equipement[] = [];

  constructor(private equipementsService: EquipementsService, private router: Router) {}

  ngOnInit(): void {
    this.getEquipementList();
  }

  getEquipementList(): void {
    this.equipementsService.getEquipementList().subscribe(data => {
      this.equipements = data;
    });
  }

  addEquipment(): void {
    this.router.navigate(['/equipements/add']);  // Changed from '/equipment/add'
  }

  editEquipment(equipementId: number): void {
    this.router.navigate(['/equipements/edit', equipementId]);  // Changed from '/equipment/edit'
  }

  // Uncommented and updated the delete method
  deleteEquipment(id: number): void {
    this.equipementsService.deleteEquipment(id).subscribe(
      () => {
        this.getEquipementList();
      },
      error => {
        console.error('Error deleting equipment:', error);
      }
    );
  }
}