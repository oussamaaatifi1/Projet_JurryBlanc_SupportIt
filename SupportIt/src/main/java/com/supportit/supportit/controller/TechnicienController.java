package com.supportit.supportit.controller;

import com.supportit.supportit.entity.Technicien;
import com.supportit.supportit.service.TechnicienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/techniciens")
@CrossOrigin(origins = "http://localhost:4200/")
public class TechnicienController {
    @Autowired
    TechnicienService technicienService;

    @GetMapping
    public List<Technicien> getAllTechniciens(){
        return technicienService.getTechnicienList();
    }
}
