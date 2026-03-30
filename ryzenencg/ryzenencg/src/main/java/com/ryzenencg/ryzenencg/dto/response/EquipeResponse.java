package com.ryzenencg.ryzenencg.dto.response;

import com.ryzenencg.ryzenencg.dto.request.ParticipantDto;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class EquipeResponse {
    private Long id;
    private String nomEquipe;
    private String region;
    private String ville;

    // Pour l'Admin Dashboard
    private String experienceHackathon;
    private String detailsExperience;
    private List<String> competencesEquipe;
    private String motivation;
    private String comprehensionTheme;

    // Projet
    private boolean aUneIdee;
    private String titreProjet;
    private String descriptionProjet;
    private String problemeIdentifie;
    private String impactPotentiel;
    private String faisabilite;
    private String ambitionApres;

    private LocalDateTime dateInscription;
    private List<ParticipantDto> membres;
}