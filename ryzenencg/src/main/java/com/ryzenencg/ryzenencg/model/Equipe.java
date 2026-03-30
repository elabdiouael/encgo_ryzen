package com.ryzenencg.ryzenencg.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "equipes")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Equipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nomEquipe;

    private String region;
    private String ville;
    private String experienceHackathon;

    @Column(columnDefinition = "TEXT")
    private String detailsExperience;

    // 💥 THE LIFE-SAVER FIX: Rddinaha String 3adi f Database!
    @Column(columnDefinition = "TEXT")
    private String competencesEquipe;

    @Column(columnDefinition = "TEXT")
    private String motivation;

    @Column(columnDefinition = "TEXT")
    private String comprehensionTheme;

    private boolean aUneIdee;
    private String titreProjet;

    @Column(columnDefinition = "TEXT")
    private String descriptionProjet;

    @Column(columnDefinition = "TEXT")
    private String problemeIdentifie;

    @Column(columnDefinition = "TEXT")
    private String impactPotentiel;

    @Column(columnDefinition = "TEXT")
    private String faisabilite;

    private String ambitionApres;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime dateInscription;

    @Builder.Default
    @OneToMany(mappedBy = "equipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Participant> participants = new ArrayList<>();

    public void addParticipant(Participant participant) {
        if (this.participants == null) {
            this.participants = new ArrayList<>();
        }
        this.participants.add(participant);
        participant.setEquipe(this);
    }
}