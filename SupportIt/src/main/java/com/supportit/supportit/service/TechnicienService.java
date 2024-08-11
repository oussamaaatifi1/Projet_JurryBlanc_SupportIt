package com.supportit.supportit.service;

import com.supportit.supportit.entity.Technicien;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public interface TechnicienService {
    List<Technicien> getTechnicienList();

}