import { Component, OnInit } from '@angular/core';
import { EquipementsService } from 'src/app/service/equipements.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipement } from 'src/app/Model/Equipement';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {
  equipmentForm!: FormGroup;
  equipementId!: number;

  constructor(
    private fb: FormBuilder,
    private equipementsService: EquipementsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipementId = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeForm();
    this.loadEquipment();
  }

  initializeForm(): void {
    this.equipmentForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      imgUrl: [''],
      statut: ['AVAILABLE']
    });
  }

  loadEquipment(): void {
    this.equipementsService.getEquipementList().subscribe(
      (equipements: Equipement[]) => {
        const equipment = equipements.find(e => e.equipementId === this.equipementId);
        if (equipment) {
          this.equipmentForm.patchValue(equipment);
        } else {
          console.warn('Equipment not found');
        }
      },
      (error: any) => {
        console.error('Error fetching equipment list:', error);
      }
    );
  }

  updateEquipment(): void {
    if (this.equipmentForm.valid) {
      this.equipementsService.updateEquipment(this.equipementId, this.equipmentForm.value).subscribe(
        () => {
          this.router.navigate(['/equipements']);
        },
        (error: any) => {
          console.error('Error updating equipment:', error);
        }
      );
    }
  }

  onSubmit(): void {
    this.updateEquipment();
  }
}
