package com.supportit.supportit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

import java.util.List;


@Entity
public class Technicien extends Personne{
    @OneToMany(mappedBy = "technicien")
    @JsonIgnore
    private List<Ticket> tickets;
}
