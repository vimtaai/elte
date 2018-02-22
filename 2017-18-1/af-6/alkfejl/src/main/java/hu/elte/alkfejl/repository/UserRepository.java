package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends
        CrudRepository<User, Long> {
    
    Optional<User> findByUsernameAndPassword(String username, 
                                             String password);
}
