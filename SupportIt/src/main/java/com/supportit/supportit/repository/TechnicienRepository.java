package com.supportit.supportit.repository;

import com.supportit.supportit.entity.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicienRepository extends JpaRepository<Technicien, Long> {
}
