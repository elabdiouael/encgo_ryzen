package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe, Long> {

    // Vérifier si le nom de l'équipe existe déjà (Risk Management)
    boolean existsByNomEquipe(String nomEquipe);
}