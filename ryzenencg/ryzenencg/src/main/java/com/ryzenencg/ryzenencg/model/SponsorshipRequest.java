package com.ryzenencg.ryzenencg.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class SponsorshipRequest {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String entreprise;
    private String responsable;
    private String email;
    private String telephone;
    private String message;
}