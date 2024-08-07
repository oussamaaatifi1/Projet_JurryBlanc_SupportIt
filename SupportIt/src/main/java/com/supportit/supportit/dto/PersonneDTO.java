package com.supportit.supportit.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonneDTO {
    private Long id;
    private String nom;
    private String email;
    private String password;
}
