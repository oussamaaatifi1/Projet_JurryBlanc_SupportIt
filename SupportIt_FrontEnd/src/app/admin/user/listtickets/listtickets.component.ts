import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Model/Ticket';
import { TicketServicesService } from 'src/app/service/ticket-services.service';

@Component({
  selector: 'app-listtickets',
  templateUrl: './listtickets.component.html',
  styleUrls: ['./listtickets.component.css']
})
export class ListticketsComponent implements OnInit {

  tickets : Ticket[] = [];

  constructor(private ticketsService : TicketServicesService) {}
  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets() : void {
    this.ticketsService.getAllTickets().subscribe(data => {
      this.tickets = data;
    });
  }

}
