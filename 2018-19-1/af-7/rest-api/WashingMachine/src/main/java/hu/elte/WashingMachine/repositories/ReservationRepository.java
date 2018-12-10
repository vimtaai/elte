package hu.elte.WashingMachine.repositories;

import hu.elte.WashingMachine.entities.Reservation;
import hu.elte.WashingMachine.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation, Integer> {
    Iterable<Reservation> findAllByUser(User user);
}
