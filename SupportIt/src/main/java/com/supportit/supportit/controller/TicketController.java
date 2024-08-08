package com.supportit.supportit.controller;

import com.supportit.supportit.entity.Ticket;
import com.supportit.supportit.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
public class TicketController {

    @Autowired
    TicketService ticketService;

    @PostMapping("/User/tickets/add")
    public Ticket addTicket(@RequestBody Ticket ticket){
        return ticketService.addTicket(ticket);
    }

    @GetMapping("/User/tickets/all")
    public List<Ticket> getAllTickets(){
        return ticketService.getAllTickets();
    }

    @PutMapping("/Admin/tickets/assigner/{id}")
    public Ticket assignerTicket(@PathVariable Long id, @RequestBody Ticket ticket){
        return ticketService.assignerTicket(id, ticket);
    }

}
