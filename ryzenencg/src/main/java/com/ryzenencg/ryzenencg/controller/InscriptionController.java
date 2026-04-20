package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.dto.request.InscriptionIndividuelleRequest;
import com.ryzenencg.ryzenencg.dto.request.InscriptionRequest;
import com.ryzenencg.ryzenencg.dto.response.InscriptionResponse;
import com.ryzenencg.ryzenencg.service.IInscriptionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List; // 🔥 THE FIX: Hada hwa li kan na9ess!

@RestController
@RequestMapping("/api/v1/inscriptions")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class InscriptionController {

    private final IInscriptionService inscriptionService;

    // Endpoint l-9dim (Équipes)
    @PostMapping
    public ResponseEntity<InscriptionResponse> register(@Valid @RequestBody InscriptionRequest request) {
        return new ResponseEntity<>(inscriptionService.inscrireEquipe(request), HttpStatus.CREATED);
    }

    // Endpoint Jdid (Individus - POST)
    @PostMapping("/individuel")
    public ResponseEntity<String> registerIndividuel(@Valid @RequestBody InscriptionIndividuelleRequest request) {
        return new ResponseEntity<>(inscriptionService.inscrireIndividu(request), HttpStatus.CREATED);
    }

    // 🔥 Endpoint bach l-Admin y-jbed l-Inscriptions Individuelles (GET)
    @GetMapping("/individuels")
    public ResponseEntity<List<com.ryzenencg.ryzenencg.model.InscriptionIndividuelle>> getAllIndividuels() {
        return ResponseEntity.ok(inscriptionService.getAllIndividus());
    }
}