package com.ryzenencg.ryzenencg.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class ParticipantDto {

    @NotBlank(message = "Le nom complet est requis")
    private String nomComplet;

    @NotBlank(message = "L'email est requis")
    @Email(message = "Format d'email invalide")
    private String email;

    @NotBlank(message = "Le téléphone est requis")
    @Pattern(regexp = "^(05|06|07)[0-9]{8}$", message = "Numéro de téléphone invalide")
    private String telephone;

    @NotBlank(message = "L'établissement est requis")
    private String etablissement;

    @NotBlank(message = "Le niveau d'études est requis")
    private String niveauEtude;

    private String role;
}