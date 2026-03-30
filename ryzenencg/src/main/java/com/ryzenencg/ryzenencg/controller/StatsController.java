package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.repository.ArchiveSlotRepository;
import com.ryzenencg.ryzenencg.repository.ContactRepository;
import com.ryzenencg.ryzenencg.repository.EquipeRepository;
import com.ryzenencg.ryzenencg.repository.SponsorshipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/stats")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class StatsController {

    private final EquipeRepository equipeRepository;
    private final SponsorshipRepository sponsorshipRepository;
    private final ContactRepository contactRepository;
    private final ArchiveSlotRepository archiveSlotRepository;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        Map<String, Object> stats = new HashMap<>();
        // K-n-jbdou ghir l-Count (L-7ssab) = Zero Lag! 🔥
        stats.put("totalEquipes", equipeRepository.count());
        stats.put("totalSponsors", sponsorshipRepository.count());
        stats.put("totalMessages", contactRepository.count());
        stats.put("totalArchives", archiveSlotRepository.count());
        stats.put("serverStatus", "ONLINE ET SÉCURISÉ");

        return ResponseEntity.ok(stats);
    }
}