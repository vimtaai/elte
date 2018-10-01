package hu.elte.WashingMachine.repositories;

import hu.elte.WashingMachine.entities.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    public Optional<User> findByEmailAndPassword(String email, String password);
}
