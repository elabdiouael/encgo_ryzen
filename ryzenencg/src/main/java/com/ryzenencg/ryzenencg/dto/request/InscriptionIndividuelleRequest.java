package com.ryzenencg.ryzenencg.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class InscriptionIndividuelleRequest {

    @NotBlank(message = "Le nom est requis")
    private String nom;

    @NotBlank(message = "Le prénom est requis")
    private String prenom;

    // 🔥 Hadi khawya mn @NotBlank, ya3ni l-utilisateur y9der y-khelliha khawya
    private String pourquoiParticipe;

    @NotBlank(message = "L'école est requise")
    private String ecole;

    @NotBlank(message = "Le statut est requis")
    private String statut;
}