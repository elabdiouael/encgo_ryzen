package com.ryzenencg.ryzenencg.config;

import com.ryzenencg.ryzenencg.model.*;
import com.ryzenencg.ryzenencg.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final ContactRepository contactRepository;
    // 🔥 Khlli les autres repositories dyalek hna (b7al EquipeRepository, etc.) ila kano 3endek
    // private final EquipeRepository equipeRepository;

    @Override
    public void run(String... args) throws Exception {

        // ==========================================
        // 1. INJECTION DES MESSAGES DE CONTACT
        // ==========================================
        if (contactRepository.count() == 0) {
            ContactMessage msg1 = ContactMessage.builder()
                    .nom("Hassan")
                    .email("hassan@gmail.com")
                    .sujet("Question sur l'hébergement")
                    .message("Bonjour, est-ce que l'hébergement est assuré pour les participants venant de l'extérieur ?")
                    .replied(false) // 👈 L-FIX HOWA HADA (Machi isReplied)
                    .dateEnvoi(LocalDateTime.now())
                    .build();

            ContactMessage msg2 = ContactMessage.builder()
                    .nom("Fatima Zahra")
                    .email("fatima@gmail.com")
                    .sujet("Critères de sélection")
                    .message("Quels sont les critères principaux pour l'évaluation des projets d'IA ?")
                    .replied(true) // 👈 L-FIX HOWA HADA (Machi isReplied)
                    .reponseAdmin("Bonjour, l'innovation, la faisabilité technique et l'impact sur l'ESS.")
                    .dateEnvoi(LocalDateTime.now().minusDays(1))
                    .build();

            contactRepository.saveAll(List.of(msg1, msg2));
            System.out.println("[SYSTEM] ✅ Messages de test injectés !");
        }

        // ==========================================
        // 2. INJECTION DES ÉQUIPES (Cyber Knights, etc.)
        // ==========================================
        // Khelli l-code li kan 3endek hna dyal les équipes ("Cyber Knights", "Data Ninjas", "SAYANS")
        // bach may-t-mse7ch lik mn l-Dashboard d l-Admin!

    }
}