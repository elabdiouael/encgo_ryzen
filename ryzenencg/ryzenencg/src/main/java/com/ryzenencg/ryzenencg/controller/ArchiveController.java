package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.model.ArchiveSlot;
import com.ryzenencg.ryzenencg.repository.ArchiveSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/archives")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ArchiveController {

    private final ArchiveSlotRepository archiveSlotRepository;

    // Njibou ga3 les slots
    @GetMapping
    public ResponseEntity<List<ArchiveSlot>> getAllArchives() {
        return ResponseEntity.ok(archiveSlotRepository.findAll());
    }

    // N-zido slot jdid (L-Admin)
    @PostMapping
    public ResponseEntity<ArchiveSlot> addArchive(@RequestBody ArchiveSlot slot) {
        return ResponseEntity.ok(archiveSlotRepository.save(slot));
    }

    // N-ms7ou slot (L-Admin)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteArchive(@PathVariable Long id) {
        archiveSlotRepository.deleteById(id);
        return ResponseEntity.ok("Slot supprimé avec succès !");
    }
}