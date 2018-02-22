package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository
        extends CrudRepository<User, Long> {
    Optional<User> findByEmailAndPassword(String email,
                                             String password);
}
