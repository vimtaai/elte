package com.elte.alkfejlrest.repository;

import com.elte.alkfejlrest.entity.FamilyMember;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Integer>{
       
}
