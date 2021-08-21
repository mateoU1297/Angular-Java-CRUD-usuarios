package com.example.backend.services;

import java.util.Optional;

import com.example.backend.models.RolModel;
import com.example.backend.repositories.RolRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {
    @Autowired
    RolRepository rolRepository;

    public Iterable<RolModel> getRoles(){
        return this.rolRepository.findAll();
    }

    public Optional<RolModel> getById(Long id){
        return this.rolRepository.findById(id);
    }
}