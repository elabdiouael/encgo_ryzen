package com.ryzenencg.ryzenencg.service.impl;

import com.ryzenencg.ryzenencg.dto.request.InscriptionRequest;
import com.ryzenencg.ryzenencg.dto.request.ParticipantDto;
import com.ryzenencg.ryzenencg.dto.response.EquipeResponse;
import com.ryzenencg.ryzenencg.dto.response.InscriptionResponse;
import com.ryzenencg.ryzenencg.model.Equipe;
import com.ryzenencg.ryzenencg.model.Participant;
import com.ryzenencg.ryzenencg.repository.EquipeRepository;
import com.ryzenencg.ryzenencg.service.IInscriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InscriptionServiceImpl implements IInscriptionService {

    private final EquipeRepository equipeRepository;

    @Override
    @Transactional
    public InscriptionResponse inscrireEquipe(InscriptionRequest request) {

        if(equipeRepository.existsByNomEquipe(request.getNomEquipe())){
            throw new RuntimeException("Ce nom d'équipe est déjà pris !");
        }

        // 💥 THE BYPASS: N-jem3ou les competences f String wa7ed b l-fassila
        String competencesJoined = (request.getCompetencesEquipe() != null && !request.getCompetencesEquipe().isEmpty())
                ? String.join(", ", request.getCompetencesEquipe())
                : "Non Spécifié";

        Equipe equipe = Equipe.builder()
                .nomEquipe(request.getNomEquipe())
                .region(request.getRegion())
                .ville(request.getVille())
                .experienceHackathon(request.getExperienceHackathon())
                .detailsExperience(request.getDetailsExperience())
                .competencesEquipe(competencesJoined) // 🔥 HNA DKHLET STRING
                .motivation(request.getMotivation())
                .comprehensionTheme(request.getComprehensionTheme())
                .aUneIdee(request.isAUneIdee())
                .titreProjet(request.getTitreProjet())
                .descriptionProjet(request.getDescriptionProjet())
                .problemeIdentifie(request.getProblemeIdentifie())
                .impactPotentiel(request.getImpactPotentiel())
                .faisabilite(request.getFaisabilite())
                .ambitionApres(request.getAmbitionApres())
                .build();

        var participants = request.getMembres().stream().map(dto -> {
            Participant p = Participant.builder()
                    .nomComplet(dto.getNomComplet())
                    .email(dto.getEmail())
                    .telephone(dto.getTelephone())
                    .etablissement(dto.getEtablissement())
                    .niveauEtude(dto.getNiveauEtude())
                    .role(dto.getRole() != null ? dto.getRole() : "MEMBRE")
                    .build();
            equipe.addParticipant(p);
            return p;
        }).collect(Collectors.toList());

        Equipe savedEquipe = equipeRepository.save(equipe);

        return InscriptionResponse.builder()
                .message("Inscription réussie")
                .equipeId(savedEquipe.getId())
                .dateInscription(savedEquipe.getDateInscription())
                .build();
    }

    @Override
    @Transactional(readOnly = true)
    public List<EquipeResponse> getAllEquipes() {
        return equipeRepository.findAll().stream().map(equipe -> {

            List<ParticipantDto> membresDto = equipe.getParticipants().stream().map(p -> {
                ParticipantDto dto = new ParticipantDto();
                dto.setNomComplet(p.getNomComplet());
                dto.setEmail(p.getEmail());
                dto.setTelephone(p.getTelephone());
                dto.setEtablissement(p.getEtablissement());
                dto.setNiveauEtude(p.getNiveauEtude());
                dto.setRole(p.getRole());
                return dto;
            }).collect(Collectors.toList());

            // 💥 THE BYPASS: N-reg3ou l-String l-List d les Strings bach l-Frontend ma-y-3i9ch
            List<String> competencesList = equipe.getCompetencesEquipe() != null
                    ? Arrays.asList(equipe.getCompetencesEquipe().split(", "))
                    : Arrays.asList("Non Spécifié");

            return EquipeResponse.builder()
                    .id(equipe.getId())
                    .nomEquipe(equipe.getNomEquipe())
                    .region(equipe.getRegion())
                    .ville(equipe.getVille())
                    .experienceHackathon(equipe.getExperienceHackathon())
                    .detailsExperience(equipe.getDetailsExperience())
                    .competencesEquipe(competencesList) // 🔥 HNA RJE3 LIST
                    .motivation(equipe.getMotivation())
                    .comprehensionTheme(equipe.getComprehensionTheme())
                    .aUneIdee(equipe.isAUneIdee())
                    .titreProjet(equipe.getTitreProjet())
                    .descriptionProjet(equipe.getDescriptionProjet())
                    .problemeIdentifie(equipe.getProblemeIdentifie())
                    .impactPotentiel(equipe.getImpactPotentiel())
                    .faisabilite(equipe.getFaisabilite())
                    .ambitionApres(equipe.getAmbitionApres())
                    .dateInscription(equipe.getDateInscription())
                    .membres(membresDto)
                    .build();

        }).collect(Collectors.toList());
    }
}