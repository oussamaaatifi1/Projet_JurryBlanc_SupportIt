package com.supportit.supportit.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ticket;
    private String description;
    private String status;
    private Date dateCreation;
    private int id_employe;
    private int id_technicien;
    private int id_equipe;

    @ManyToOne
    @JoinColumn(name = "technicien_id")
    private Technicien technicien;

}
