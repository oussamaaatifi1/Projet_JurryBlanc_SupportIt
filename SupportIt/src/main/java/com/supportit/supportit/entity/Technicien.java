package com.supportit.supportit.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Technicien extends Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_technicien;
}
