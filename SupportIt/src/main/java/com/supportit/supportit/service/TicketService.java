package com.supportit.supportit.service;


import com.supportit.supportit.entity.Ticket;

import java.util.List;

public interface TicketService {
    Ticket addTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    List<Ticket> findByTechnicien(Long id);
    List<Ticket> findByUtilisateur(Long id);
    Ticket assignerTicket(Long id, Ticket ticket);
    Ticket changerStatut(Long id, Ticket ticket);
}
