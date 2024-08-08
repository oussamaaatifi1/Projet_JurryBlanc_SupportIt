package com.supportit.supportit.controller;

import com.supportit.supportit.entity.Panne;
import com.supportit.supportit.service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/Admin/panne")
public class PanneController {

    @Autowired
    PanneService panneService;

    @PostMapping("/add")
    public Panne addPanne(@RequestBody Panne panne){
        return panneService.addPanne(panne);
    }

    @GetMapping("/all")
    public List<Panne> getAllPannes(){
        return panneService.getAllPannes();
    }

    @PutMapping("/edit/{id}")
    public Panne editPanne(@PathVariable Long id, @RequestBody Panne panne){
        return panneService.updatePanne(id,panne);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePanne(@PathVariable Long id){
         panneService.deletePanne(id);
    }
}
