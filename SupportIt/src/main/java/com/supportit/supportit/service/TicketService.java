package com.supportit.supportit.service;


import com.supportit.supportit.entity.Ticket;

import java.util.List;

public interface TicketService {
    Ticket addTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    Ticket assignerTicket(Long id, Ticket ticket);
}
