package com.supportit.supportit.dto;

import com.supportit.supportit.entity.enums.EtatTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {
    private Long ticketId;
    private String description;
    private LocalDate dateDeCreation;
    private EtatTicket statut;
    private TechnicienDTO technicien;
    private UtilisateurDTO utilisateur;
    private EquipmentDTO equipment;
    private PanneDTO panne;
}
