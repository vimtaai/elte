package hu.elte.WashingMachine.repositories;

import hu.elte.WashingMachine.entities.WashingMachine;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WashingMachineRepository extends CrudRepository<WashingMachine, Integer> {
    Optional<List<WashingMachine>> findAllByBuildingAndFloor(String building, Integer floor); 
}
