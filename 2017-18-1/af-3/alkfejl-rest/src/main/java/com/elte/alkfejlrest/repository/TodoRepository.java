/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.elte.alkfejlrest.repository;

import com.elte.alkfejlrest.entity.Todo;
import com.elte.alkfejlrest.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Integer> {
    public Iterable<Todo> findAllByUser(User user);
}
