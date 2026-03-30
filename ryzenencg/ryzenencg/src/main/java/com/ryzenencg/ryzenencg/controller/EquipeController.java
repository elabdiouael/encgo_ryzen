package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.dto.response.EquipeResponse;
import com.ryzenencg.ryzenencg.service.IInscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/equipes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Bach Next.js y9der y-consommiha
public class EquipeController {

    private final IInscriptionService inscriptionService;

    @GetMapping
    public ResponseEntity<List<EquipeResponse>> getAllEquipes() {
        return ResponseEntity.ok(inscriptionService.getAllEquipes());
    }
}