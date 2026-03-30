package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.ArchiveSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArchiveSlotRepository extends JpaRepository<ArchiveSlot, Long> {
}