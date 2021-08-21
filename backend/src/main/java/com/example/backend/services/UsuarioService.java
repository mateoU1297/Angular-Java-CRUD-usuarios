package com.example.backend.services;

import com.example.backend.models.UsuarioModel;
import com.example.backend.repositories.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public Iterable<UsuarioModel> getUsuarios(){
        return usuarioRepository.findAll();
    }

    public UsuarioModel addUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }
}
