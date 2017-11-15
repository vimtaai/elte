package com.elte.alkfejlrest.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import groovy.transform.EqualsAndHashCode;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class FamilyMember {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    @Column(nullable = false)
    private String name;
    
    @OneToMany(targetEntity = ShopItem.class,
               cascade = CascadeType.ALL,
               mappedBy = "familyMember")
    private List<ShopItem> items;
}
