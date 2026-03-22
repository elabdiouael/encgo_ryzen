package com.ryzenencg.ryzenencg.dto;

import lombok.Data;

@Data
public class MembreRequest {
    private String nom;
    private String email;
    private String telephone;
    private String etablissement;
    private String role;
}