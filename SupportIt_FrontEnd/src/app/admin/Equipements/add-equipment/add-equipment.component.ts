import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/Model/Equipement';
import { EquipmentStatut } from 'src/app/Model/enum/EquipmentStatut';
import { EquipementsService } from 'src/app/service/equipements.service';
@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {
  selectionOption : EquipmentStatut;

  equipement : Equipement = new Equipement;
  equipmentStatuses = EquipmentStatut;

  ngOnInit(): void {
    
  }

  saveEquipement() {
    this.equipementservice.createEquipements(this.equipement).subscribe(
      data => {
        console.log(data);
        this.geToEquipementList();
      },
      error => {
        console.error('Error saving equipment:', error);
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
        } else {
          // Server-side error
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`
          );
        }
      }
    );
  }

  geToEquipementList(){
    this.router.navigate(['/equipements']);
  }
  constructor(private equipementservice : EquipementsService,
    private router : Router
  ) {
    this.selectionOption = EquipmentStatut.AREPARE;
  }
  



  onStatusChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectionOption = selectElement.value as EquipmentStatut;
    console.log('Selected Status:', this.selectionOption);
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.equipement.imgUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  

  onSubmit(){
    console.log(this.equipement);
    this.saveEquipement();
  }
}
