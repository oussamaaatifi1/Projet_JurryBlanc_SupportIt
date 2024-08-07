package com.supportit.supportit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class HistoriquePanneDTO {
    private Long id;
    private LocalDate datePanne;
    private PanneDTO panne;
    private EquipmentDTO equipment;
}
