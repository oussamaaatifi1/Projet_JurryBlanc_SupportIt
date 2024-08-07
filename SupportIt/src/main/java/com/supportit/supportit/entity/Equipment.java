package com.supportit.supportit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.supportit.supportit.entity.enums.EquipmentStatut;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long equipementId;
    private String name;
    private String description;
    private String imgUrl;
    @Enumerated(EnumType.STRING)
    private EquipmentStatut statut;


    @OneToMany(mappedBy = "equipment")
    @JsonIgnore
    private List<HistoriquePanne> historiques;

    @OneToMany(mappedBy = "equipment")
    @JsonIgnore
    private List<Ticket> tickets;


}