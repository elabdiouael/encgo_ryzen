package com.ryzenencg.ryzenencg.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
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

    // 🔥 THE FIX: Bach React y-fhem bli l-message m-jawb w y-3tih l-Badge l-Khder!
    @Builder.Default
    @JsonProperty("isReplied")
    private Boolean replied = false;

    @Column(columnDefinition = "TEXT")
    private String reponseAdmin;

    @Builder.Default
    private LocalDateTime dateEnvoi = LocalDateTime.now();
}