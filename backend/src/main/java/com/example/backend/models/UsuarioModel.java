package com.example.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String nombre;

    @Column(nullable = false)
    private Boolean activo;

    @Column(name="id_rol", nullable = false)
    private Integer idRol;

    @OneToOne()
    @JoinColumn(name="id_rol", referencedColumnName = "id", insertable = false, updatable = false)
    private RolModel userRol;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

    public Integer getIdRol() {
        return idRol;
    }

    public void setIdRol(Integer idRol) {
        this.idRol = idRol;
    }

    public RolModel getUserRol() {
        return this.userRol;
    }

    public void setUserRol(RolModel userRol) {
        this.userRol = userRol;
    }
}