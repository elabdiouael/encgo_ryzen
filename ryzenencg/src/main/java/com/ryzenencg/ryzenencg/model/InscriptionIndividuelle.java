package com.ryzenencg.ryzenencg.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "inscriptions_individuelles")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class InscriptionIndividuelle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(columnDefinition = "TEXT")
    private String pourquoiParticipe; // 👈 Hadi machi nullable = false, ya3ni Optionnelle (Facultative)

    @Column(nullable = false)
    private String ecole;

    @Column(nullable = false)
    private String statut; // (Etudiant, Entrepreneur...)

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime dateInscription;
}