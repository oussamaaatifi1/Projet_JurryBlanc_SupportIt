import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtatTicket } from 'src/app/Model/enum/EtatTicket';
import { Equipement } from 'src/app/Model/Equipement';
import { Ticket } from 'src/app/Model/Ticket';
import { EquipementsService } from 'src/app/service/equipements.service';
import { TicketServicesService } from 'src/app/service/ticket-services.service';

@Component({
  selector: 'app-user-dashboard-component',
  templateUrl: './user-dashboard-component.component.html',
  styleUrls: ['./user-dashboard-component.component.css']
})
export class UserDashboardComponentComponent {
  // ticketForm!: FormGroup;
  // etatTickets = Object.values(EtatTicket);
  // equipements: Equipement[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private ticketService: TicketServicesService,
  //   private equipmentService: EquipementsService
  // ) {}

  // ngOnInit(): void {
  //   this.ticketForm = this.fb.group({
  //     description: ['', Validators.required],
  //     dateDeCreation: ['', Validators.required],
  //     statut: ['', Validators.required],
  //     equipement: ['', Validators.required]
  //   });

  //   this.loadEquipments();
  // }

  // loadEquipments(): void {
  //   this.equipmentService.getEquipementList().subscribe((data: Equipement[]) => {
  //     this.equipements = data;
  //   });
  // }

  // onSubmit(): void {
  //   if (this.ticketForm.valid) {
  //     this.ticketService.addTicket(this.ticketForm.value).subscribe(
  //       response => {
  //         console.log('Ticket added successfully!', response);
  //       },
  //       error => {
  //         console.error('Error adding ticket', error);
  //       }
  //     );
  //   }
  // }
}
