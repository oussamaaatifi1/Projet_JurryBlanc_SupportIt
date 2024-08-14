package com.supportit.supportit.service.impl;

import com.supportit.supportit.entity.Equipment;
import com.supportit.supportit.entity.Technicien;
import com.supportit.supportit.entity.Ticket;
import com.supportit.supportit.entity.Utilisateur;
import com.supportit.supportit.entity.enums.EtatTicket;
import com.supportit.supportit.repository.EquipementRepository;
import com.supportit.supportit.repository.PersonneRepository;
import com.supportit.supportit.repository.TechnicienRepository;
import com.supportit.supportit.repository.TicketRepository;
import com.supportit.supportit.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    TechnicienRepository technicienRepository;
    @Autowired
    private PersonneRepository personneRepository;
    @Autowired
    private EquipementRepository equipmentRepository;

    @Override
    public Ticket addTicket(Ticket ticket) {
        Utilisateur utilisateur = (Utilisateur) personneRepository.findById(ticket.getUtilisateur().getId())
                .orElseThrow(() -> new RuntimeException("Utilisateur not found"));
        ticket.setStatut(EtatTicket.NOTRAITE);
        ticket.setUtilisateur(utilisateur);
        ticket.setDateDeCreation(LocalDate.now());
        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public List<Ticket> findByTechnicien(Long id) {
        Technicien technicien = (Technicien) personneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Technicien not found"));
        List<Ticket> tickets = ticketRepository.findAllByTechnicien(technicien);
        return tickets;
    }

    @Override
    public List<Ticket> findByUtilisateur(Long id) {
        Utilisateur utilisateur = (Utilisateur) personneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur not found"));
        List<Ticket> tickets = ticketRepository.findAllByUtilisateur(utilisateur);
        return tickets;
    }

    @Override
    public List<Ticket> findByEquipment(Long id) {
        Equipment equipment = equipmentRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Equipment not found")
        );
        List<Ticket> equipments = ticketRepository.findAllByEquipment(equipment);
        return equipments;
    }


    @Override
    public Ticket assignerTicket(Long id, Ticket ticket) {

        Ticket assignerTicked = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));

        Technicien technicien = (Technicien) personneRepository.findById(ticket.getTechnicien().getId())
                .orElseThrow(() -> new RuntimeException("Technicien not found"));
        assignerTicked.setTechnicien(technicien);


        return ticketRepository.save(assignerTicked);
    }

    @Override
    public Ticket changerStatut(Long id, Ticket ticket) {

        Ticket ticketStaut = ticketRepository.findById(id)
                .orElseThrow(() ->new RuntimeException("Ticket not found"));

        ticketStaut.setStatut(ticket.getStatut());

        return ticketRepository.save(ticketStaut);
    }
}
