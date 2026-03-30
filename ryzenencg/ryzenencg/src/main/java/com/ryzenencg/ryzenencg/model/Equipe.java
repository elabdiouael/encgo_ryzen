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

    // 🌍 Infos Générales
    private String region;
    private String ville;

    // 🏆 Expérience & Compétences
    private String experienceHackathon;

    @Column(columnDefinition = "TEXT")
    private String detailsExperience;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "equipe_competences", joinColumns = @JoinColumn(name = "equipe_id"))
    @Column(name = "competence")
    private List<String> competencesEquipe = new ArrayList<>();

    // 💡 Motivations & Thème
    @Column(columnDefinition = "TEXT")
    private String motivation;

    @Column(columnDefinition = "TEXT")
    private String comprehensionTheme;

    // 🚀 Idée de Projet
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