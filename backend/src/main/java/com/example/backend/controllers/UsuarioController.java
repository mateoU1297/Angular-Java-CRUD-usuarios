package com.example.backend.controllers;

import com.example.backend.models.UsuarioModel;
import com.example.backend.services.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping()
    public Iterable<UsuarioModel> getUsuarios(){
        return this.usuarioService.getUsuarios();
    }

    @PostMapping("create")
    public UsuarioModel addUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioService.addUsuario(usuario);
    }

    @DeleteMapping( path = "delete/{id}")
    public boolean deleteUsuario(@PathVariable("id") Long id){
        return this.usuarioService.deleteUsuario(id);
    }

    @GetMapping( path = "find-by-name/{nombre}")
    public Iterable<UsuarioModel> findByName(@PathVariable("nombre") String nombre){
        return this.usuarioService.findByName(nombre);
    }
}
