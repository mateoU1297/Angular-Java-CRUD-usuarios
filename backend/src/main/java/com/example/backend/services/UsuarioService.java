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
        return this.usuarioRepository.findAll();
    }

    public UsuarioModel addUsuario(UsuarioModel usuario){
        return this.usuarioRepository.save(usuario);
    }

    public boolean deleteUsuario(Long id){
        try{
            this.usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    // public Iterable<UsuarioModel> findByName(String nombre){
    //     return this.usuarioRepository.findByName(nombre);
    // }
}
