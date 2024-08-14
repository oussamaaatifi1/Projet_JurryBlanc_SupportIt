package com.supportit.supportit.controller;

import com.supportit.supportit.entity.Ticket;
import com.supportit.supportit.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/tickets")
@CrossOrigin(origins = "http://localhost:4200/")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @PostMapping("/add")
    public Ticket addTicket(@RequestBody Ticket ticket){
        return ticketService.addTicket(ticket);
    }

    @GetMapping("/all")
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @GetMapping("/equipmentTickets/{id}")
    public List<Ticket> ticketsByEquipment(@PathVariable Long id){
        return ticketService.findByEquipment(id);
    }


    @GetMapping("/tickets/{id}")
    public List<Ticket> ticketsByTechnicien(@PathVariable Long id){
        return ticketService.findByTechnicien(id);
    }

    @GetMapping("/mytickets/{id}")
    public List<Ticket> ticketsByUtilisateur(@PathVariable Long id){
        return ticketService.findByUtilisateur(id);
    }

    @PutMapping("/assigner/{id}")
    public Ticket assignerTicket(@PathVariable Long id, @RequestBody Ticket ticket){
        return ticketService.assignerTicket(id, ticket);
    }

    @PutMapping("/statut/{id}")
    public Ticket changetStatut(@PathVariable Long id, @RequestBody Ticket ticket){
        return ticketService.changerStatut(id, ticket);
    }
}
