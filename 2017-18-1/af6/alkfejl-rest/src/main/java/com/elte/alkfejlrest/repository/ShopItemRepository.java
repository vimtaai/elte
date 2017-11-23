/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.elte.alkfejlrest.repository;

import com.elte.alkfejlrest.entity.FamilyMember;
import com.elte.alkfejlrest.entity.ShopItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopItemRepository extends CrudRepository<ShopItem, Integer> {
}
