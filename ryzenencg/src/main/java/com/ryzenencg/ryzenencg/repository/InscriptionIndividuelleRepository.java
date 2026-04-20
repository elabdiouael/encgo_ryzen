package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.InscriptionIndividuelle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionIndividuelleRepository extends JpaRepository<InscriptionIndividuelle, Long> {
}