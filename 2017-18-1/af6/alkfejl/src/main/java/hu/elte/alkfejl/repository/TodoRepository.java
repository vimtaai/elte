package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Todo;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository 
       extends CrudRepository<Todo, Long> {
    List<Todo> findAllByText(String text);
    List<Todo> findAllByVersion(int version);
    
    //@Query("")
    //List<Todo> doMyQuery();
            
}
