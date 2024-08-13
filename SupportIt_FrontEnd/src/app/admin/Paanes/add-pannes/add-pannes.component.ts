import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pannes } from 'src/app/Model/Pannes';
import { PanneService } from 'src/app/service/panne.service';
@Component({
  selector: 'app-add-pannes',
  templateUrl: './add-pannes.component.html',
  styleUrls: ['./add-pannes.component.css']
})
export class AddPannesComponent implements OnInit {

  pannes : Pannes = new Pannes;


  constructor(private pannesService : PanneService,
    private router : Router) {}

  ngOnInit(): void {
    
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pannes.imgUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveEquipement() {
    this.pannesService.createPannes(this.pannes).subscribe(
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
    this.router.navigate(['/pannes']);
  }
  
  onSubmit(){
    console.log(this.pannes);
    this.saveEquipement();
  }

}
