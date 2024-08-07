package com.supportit.supportit.repository;


import com.supportit.supportit.entity.HistoriquePanne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoriqueRepository extends JpaRepository<HistoriquePanne, Long> {
//    List<Historique> findByEquipementId(Long equipementId);

}
