package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant, Long> {
}