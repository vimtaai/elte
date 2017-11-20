package com.elte.alkfejlrest.repository;

import com.elte.alkfejlrest.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
       
}
