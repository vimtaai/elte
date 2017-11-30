package com.elte.alkfejlrest.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    @Column(nullable=false)
    private String name;
    
    @Column(nullable=false, unique=true)
    private String email;
    
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable=false)
    private String password;
   
    
    @Column
    @Enumerated(EnumType.STRING)
    private Role role;
    
    public enum Role {
        GUEST, USER, ADMIN
    }
;}
