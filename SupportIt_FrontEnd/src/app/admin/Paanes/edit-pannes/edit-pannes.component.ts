import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pannes } from 'src/app/Model/Pannes';
import { PanneService } from 'src/app/service/panne.service';

@Component({
  selector: 'app-edit-pannes',
  templateUrl: './edit-pannes.component.html',
  styleUrls: ['./edit-pannes.component.css']
})
export class EditPannesComponent  implements OnInit{

  panneForm!: FormGroup;
  panneId!: number;

  
  constructor(
    private fb: FormBuilder,
    private panneService: PanneService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.panneId = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeForm();
    this.loadPanne();
  }

  initializeForm(){
    this.panneForm = this.fb.group({
      type: ['', Validators.required],
      description: [''],
      imgUrl: [''],
    });
  }
  loadPanne(): void {
    this.panneService.getPanneList().subscribe(
      (equipements: Pannes[]) => {
        const equipment = equipements.find(e => e.panneId === this.panneId);
        if (equipment) {
          this.panneForm.patchValue(equipment);
        } else {
          console.warn('Equipment not found');
        }
      },
      (error: any) => {
        console.error('Error fetching equipment list:', error);
      }
    );
  }
  
  updatePanne(): void {
    if (this.panneForm.valid) {
      this.panneService.updatePanne(this.panneId, this.panneForm.value).subscribe(
        () => {
          this.router.navigate(['/pannes']);
        },
        (error: any) => {
          console.error('Error updating equipment:', error);
        }
      );
    }
  }

  onSubmit(): void {
    this.updatePanne();

  }
}
