package com.supportit.supportit.repository;


import com.supportit.supportit.entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipementRepository extends JpaRepository<Equipment, Long> {
}