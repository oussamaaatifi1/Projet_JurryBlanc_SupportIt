package com.supportit.supportit.dto;

import com.supportit.supportit.entity.enums.EquipmentStatut;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EquipmentDTO {
    private Long equipementId;
    private String name;
    private String description;
    private String imgUrl;
    private EquipmentStatut statut;
    private List<HistoriquePanneDTO> historiques;
    private List<TicketDTO> tickets;
}
