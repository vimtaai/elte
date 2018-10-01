package hu.elte.WashingMachine.repositories;

import hu.elte.WashingMachine.entities.Tag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends CrudRepository<Tag, Integer> {
    
}
