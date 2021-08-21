package com.example.backend.repositories;

import com.example.backend.models.RolModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends CrudRepository<RolModel, Long>{
    
}