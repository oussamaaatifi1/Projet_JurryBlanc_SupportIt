package com.supportit.supportit.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Panne {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long panneId;
    private String type;
    private String description;
    private String imgUrl;



    @OneToMany(mappedBy = "panne")
    @JsonIgnore
    private List<Ticket> tickets;


}
