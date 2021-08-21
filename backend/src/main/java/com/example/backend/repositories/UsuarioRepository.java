package com.example.backend.repositories;

import com.example.backend.models.UsuarioModel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long>{
    
    @Query(value = "SELECT * FROM usuario u WHERE u.nombre LIKE CONCAT('%',LOWER(:nombre),'%');", nativeQuery = true)
    Iterable<UsuarioModel> findByName(String nombre);
}
