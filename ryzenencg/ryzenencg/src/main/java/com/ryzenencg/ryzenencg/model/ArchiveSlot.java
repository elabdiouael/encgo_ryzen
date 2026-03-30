package com.ryzenencg.ryzenencg.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "archive_slots")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ArchiveSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;


    private String imageUrl;
    private String videoUrl;
}