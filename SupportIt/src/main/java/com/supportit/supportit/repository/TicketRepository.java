package com.supportit.supportit.repository;


import com.supportit.supportit.entity.Technicien;
import com.supportit.supportit.entity.Ticket;
import com.supportit.supportit.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    List<Ticket> findAllByUtilisateur(Utilisateur utilisateur);
    List<Ticket> findAllByTechnicien(Technicien technicien);
}
