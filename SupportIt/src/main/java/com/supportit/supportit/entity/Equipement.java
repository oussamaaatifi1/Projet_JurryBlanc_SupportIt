package com.supportit.supportit.entity;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_equipe;
    private String nom;
    private String etat;

    @OneToMany(mappedBy = "equipement", cascade = CascadeType.ALL)
    private List<Panne> pannes;

}
