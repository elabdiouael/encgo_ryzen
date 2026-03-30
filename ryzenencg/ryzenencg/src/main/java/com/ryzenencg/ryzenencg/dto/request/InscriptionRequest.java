package com.ryzenencg.ryzenencg.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;
import java.util.List;

@Data
public class InscriptionRequest {

    @JsonProperty("nom")
    @NotBlank(message = "Le nom de l'équipe est requis")
    @Size(min = 3, max = 50, message = "Le nom doit contenir entre 3 et 50 caractères")
    private String nomEquipe;

    @NotBlank(message = "La région est requise")
    private String region;

    @NotBlank(message = "La ville est requise")
    private String ville;

    // 🔥 NOUVEAUX CHAMPS D'ÉVALUATION
    @NotBlank(message = "Veuillez préciser votre expérience en hackathon")
    private String experienceHackathon;

    private String detailsExperience; // Optionnel

    @NotEmpty(message = "Veuillez sélectionner au moins une compétence")
    private List<String> competencesEquipe;

    @NotBlank(message = "La motivation est requise")
    @Size(max = 1500, message = "La motivation est trop longue")
    private String motivation;

    @NotBlank(message = "La compréhension du thème est requise")
    @Size(max = 1500, message = "Le texte est trop long")
    private String comprehensionTheme;

    // Projet
    private boolean aUneIdee;
    private String titreProjet;
    private String descriptionProjet;
    private String problemeIdentifie;
    private String impactPotentiel;
    private String faisabilite;
    private String ambitionApres;

    // 🔥 FIX: 3 à 4 membres
    @NotNull(message = "La liste des membres est requise")
    @Size(min = 3, max = 4, message = "L'équipe doit être composée de 3 ou 4 membres")
    @Valid
    private List<ParticipantDto> membres;
}