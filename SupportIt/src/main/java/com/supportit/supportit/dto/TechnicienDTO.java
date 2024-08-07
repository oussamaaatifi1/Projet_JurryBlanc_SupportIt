package com.supportit.supportit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TechnicienDTO extends PersonneDTO {
    private Long id;
    private String nom;
    private String email;
    private String password;
}
