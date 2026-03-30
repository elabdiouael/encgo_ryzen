package com.ryzenencg.ryzenencg.controller;

import com.ryzenencg.ryzenencg.model.ContactMessage;
import com.ryzenencg.ryzenencg.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contact")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactRepository contactRepository;

    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactRepository.findAll());
    }

    // 🔥 HNA KAN-SAUVEGARDIW L-MESSAGE LI JAY MN L-PUBLIC
    @PostMapping
    public ResponseEntity<String> sendMessage(@RequestBody ContactMessage msg) {
        contactRepository.save(msg);
        return ResponseEntity.ok("Message reçu et sauvegardé avec succès !");
    }

    // 🔥 HNA KAN-SAUVEGARDIW L-REPONSE DYAL L-ADMIN F L-DB BLA EMAIL
    @PostMapping("/{id}/reply")
    public ResponseEntity<String> replyToMessage(@PathVariable Long id, @RequestBody String reponse) {
        ContactMessage msg = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Message introuvable"));

        msg.setReplied(true);
        msg.setReponseAdmin(reponse);
        contactRepository.save(msg);

        return ResponseEntity.ok("Réponse enregistrée dans la base de données !");
    }
}