package com.ryzenencg.ryzenencg.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
// 🔥 L-FIX HOWA HADA: Beddelna smit l-Table bach n-bdaw page jdida f MySQL bla machakil
@Table(name = "contact_hq_messages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String email;
    private String sujet;

    @Column(columnDefinition = "TEXT")
    private String message;

    @Builder.Default
    private Boolean replied = false;

    @Column(columnDefinition = "TEXT")
    private String reponseAdmin;

    @Builder.Default
    private LocalDateTime dateEnvoi = LocalDateTime.now();
}