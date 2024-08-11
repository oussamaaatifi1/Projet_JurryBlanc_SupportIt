package com.supportit.supportit.service.impl;

import com.supportit.supportit.entity.Panne;
import com.supportit.supportit.repository.PanneRepository;
import com.supportit.supportit.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneServiceImpl implements PanneService {

    @Autowired
    PanneRepository panneRepository;

    @Override
    public Panne addPanne(Panne panne) {
        return panneRepository.save(panne);
    }

    @Override
    public Panne updatePanne(Long id, Panne panne) {

        panneRepository.findById(id);

        Panne editedPanne = new Panne();

        editedPanne.setPanneId(id);
        editedPanne.setType(panne.getType());
        editedPanne.setDescription(panne.getDescription());
        editedPanne.setImgUrl(panne.getImgUrl());

        return panneRepository.save(editedPanne);
    }

    @Override
    public void deletePanne(Long id) {
        panneRepository.deleteById(id);
    }

    @Override
    public List<Panne> getAllPannes() {
        return panneRepository.findAll();
    }
}
