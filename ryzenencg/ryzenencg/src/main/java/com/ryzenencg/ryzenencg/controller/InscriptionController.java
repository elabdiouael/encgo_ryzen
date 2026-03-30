package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.dto.request.InscriptionRequest;
import com.ryzenencg.ryzenencg.dto.response.InscriptionResponse;
import com.ryzenencg.ryzenencg.service.IInscriptionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/inscriptions")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class InscriptionController {
    private final IInscriptionService inscriptionService;

    @PostMapping
    public ResponseEntity<InscriptionResponse> register(@Valid @RequestBody InscriptionRequest request) {
        return new ResponseEntity<>(inscriptionService.inscrireEquipe(request), HttpStatus.CREATED);
    }
}