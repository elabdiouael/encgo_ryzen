package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.model.SponsorshipRequest;
import com.ryzenencg.ryzenencg.repository.SponsorshipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sponsors")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SponsorshipController {

    private final SponsorshipRepository sponsorshipRepository;

    @GetMapping
    public ResponseEntity<List<SponsorshipRequest>> getAllSponsors() {
        return ResponseEntity.ok(sponsorshipRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<String> addSponsor(@RequestBody SponsorshipRequest request) {
        sponsorshipRepository.save(request);
        return ResponseEntity.ok("Demande de sponsoring envoyée avec succès");
    }
}