package com.supportit.supportit.controller;

import com.supportit.supportit.entity.Equipment;
import com.supportit.supportit.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/Admin/equipements")
public class EquipmentController {
    @Autowired
    EquipmentService equipmentService;

    @PostMapping("/add")
    public Equipment addEquipment(@RequestBody Equipment equipment){
        return equipmentService.addEquipment(equipment);
    }
    @GetMapping("/all")
    public List<Equipment> getAllEquipment(){
        return equipmentService.getAllEquipements();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEquipment(@PathVariable Long id){
        equipmentService.deleteEquipment(id);
    }
    @PutMapping("/edit/{id}")
    public Equipment editEquipment(@PathVariable Long id,@RequestBody Equipment equipment){
        return equipmentService.editEquipment(id, equipment);
    }
}
