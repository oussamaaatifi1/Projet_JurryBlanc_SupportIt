package com.supportit.supportit.service.impl;

import com.supportit.supportit.entity.Utilisateur;
import com.supportit.supportit.repository.UtilisateurRepository;
import com.supportit.supportit.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    UtilisateurRepository utilisateurRepository;
    @Override
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }
}
