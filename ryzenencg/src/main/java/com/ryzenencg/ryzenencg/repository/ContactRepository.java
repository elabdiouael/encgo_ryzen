package com.ryzenencg.ryzenencg.repository;

import com.ryzenencg.ryzenencg.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactMessage, Long> {
}