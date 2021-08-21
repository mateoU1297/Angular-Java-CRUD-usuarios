package com.example.backend.controllers;

import java.util.Optional;

import com.example.backend.models.RolModel;
import com.example.backend.services.RolService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/rol")
public class RolController {
    
    @Autowired
    RolService rolService;

    @GetMapping()
    public Iterable<RolModel> getRoles(){
        return this.rolService.getRoles();
    }

    @GetMapping( path = "/{id}")
    public Optional<RolModel> getById(@PathVariable("id") Long id) {
        return this.rolService.getById(id);
    }
}