package com.elte.alkfejlrest.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import groovy.transform.EqualsAndHashCode;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ShopItem {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    @Column(nullable=false)
    private String text;
    
    @Column(nullable=false)
    private Integer count;
    
    @JoinColumn
    @ManyToOne(targetEntity = FamilyMember.class)
    private FamilyMember familyMember;
}
