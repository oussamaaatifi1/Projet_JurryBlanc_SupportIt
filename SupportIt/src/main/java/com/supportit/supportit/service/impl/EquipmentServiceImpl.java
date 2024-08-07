package com.supportit.supportit.service.impl;

import com.supportit.supportit.entity.Equipment;
import com.supportit.supportit.repository.EquipmentRepository;
import com.supportit.supportit.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    EquipmentRepository equipmentRepository;

    @Override
    public Equipment addEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    @Override
    public Equipment editEquipment(Long id, Equipment equipment) {
        equipmentRepository.findById(id);

        Equipment editEquipment = new Equipment();
        editEquipment.setEquipementId(id);
        editEquipment.setName(equipment.getName());
        editEquipment.setDescription(equipment.getDescription());
        editEquipment.setStatut(equipment.getStatut());


        return equipmentRepository.save(editEquipment);
    }

    @Override
    public List<Equipment> getAllEquipements() {
        return equipmentRepository.findAll();
    }

    @Override
    public void deleteEquipment(Long id) {
        equipmentRepository.deleteById(id);
    }
}
