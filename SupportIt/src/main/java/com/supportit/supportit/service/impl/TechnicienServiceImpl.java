package com.supportit.supportit.service.impl;

import com.supportit.supportit.entity.Technicien;
import com.supportit.supportit.repository.TechnicienRepository;
import com.supportit.supportit.service.TechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TechnicienServiceImpl implements TechnicienService {

    @Autowired
    TechnicienRepository technicienRepository;


    @Override
    public List<Technicien> getTechnicienList() {
        return technicienRepository.findAll();
    }
}
