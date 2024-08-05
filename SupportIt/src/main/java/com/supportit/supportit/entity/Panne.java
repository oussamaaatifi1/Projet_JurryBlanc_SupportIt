package com.supportit.supportit.entity;


import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Panne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_panne;
    private String description;
    private Date dateDeclaration;
    private String status;
    private int id_user;
    private int id_equipe;

    @ManyToOne
    @JoinColumn(name = "equipement_id")
    private Equipement equipement;

    // Getters et Setters
}
