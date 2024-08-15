import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtatTicket } from 'src/app/Model/enum/EtatTicket';
import { Equipement } from 'src/app/Model/Equipement';
import { Ticket } from 'src/app/Model/Ticket';
import { Utilisateurs } from 'src/app/Model/Utilisateurs';
import { EquipementsService } from 'src/app/service/equipements.service';
import { TicketServicesService } from 'src/app/service/ticket-services.service';

@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.css']
})
export class TableTicketsComponent implements OnInit {

  ticketForm!: FormGroup;
  etatTickets = Object.values(EtatTicket);
  equipements: Equipement[] = [];

  constructor(
    private ticketService: TicketServicesService,
    private equipmentService: EquipementsService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      dateDeCreation: ['', Validators.required],
      statut: ['', Validators.required],
      equipement: ['', Validators.required]
    });

    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getEquipementList().subscribe((data: Equipement[]) => {
      this.equipements = data;
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData: Ticket = {
        ...this.ticketForm.value,
        equipement: { equipementId: this.ticketForm.value.equipement } // Adjust if your API expects a different format
      };
  
      this.ticketService.addTicket(ticketData).subscribe(
        response => {
          console.log('Ticket added successfully!', response);
          console.log('Navigating to /listtickets');
          this.router.navigate(['/listtickets']);
        },
        error => {
          console.error('Error adding ticket', error);
        }
      );
    }
  }
  
}
