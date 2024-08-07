package com.supportit.supportit.service;

import com.supportit.supportit.entity.Panne;

import java.util.List;

public interface PanneService {
    Panne addPanne(Panne panne);
    Panne updatePanne(Long id, Panne panne);
    void deletePanne(Long id);
    List<Panne> getAllPannes();
}
