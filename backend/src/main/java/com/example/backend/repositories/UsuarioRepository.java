package com.example.backend.repositories;

import com.example.backend.models.UsuarioModel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long>{
    
    // @Query("SELECT * FROM usuario u WHERE u.nombre LIKE CONCAT('%',UPPER(:nombre),'%')")
    // Iterable<UsuarioModel> findByName(@Param("nombre") String nombre);
}
