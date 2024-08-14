package com.supportit.supportit.service;


import com.supportit.supportit.entity.Equipment;

import java.util.List;

public interface EquipmentService {
    Equipment addEquipment(Equipment equipment);
    Equipment editEquipment(Long id, Equipment equipment);
    List<Equipment> getAllEquipements();
    void deleteEquipment(Long id);
    public Equipment equipmentById(Long id);
    public Equipment changeEquipmentStatut(Long id, Equipment equipment);

}
