package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.SponsorshipRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SponsorshipRepository extends JpaRepository<SponsorshipRequest, Long> {
}