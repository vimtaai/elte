package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Todo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
    Optional<Todo> findById(Long id);

    List<Todo> findAllByDueTo(Date date);

    //@Query("SELECT t.text FROM Todo t WHERE dueTo < 1%")
    //List<Todo> findAllDueToBefore(Date date);

}
