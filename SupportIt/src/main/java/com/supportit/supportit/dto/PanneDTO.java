package com.supportit.supportit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PanneDTO {
    private Long panneId;
    private String name;
    private List<HistoriquePanneDTO> historiques;
    private List<TicketDTO> tickets;
}
