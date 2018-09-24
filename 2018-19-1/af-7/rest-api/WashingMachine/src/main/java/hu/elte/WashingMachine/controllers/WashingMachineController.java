package hu.elte.WashingMachine.controllers;

import hu.elte.WashingMachine.entities.Reservation;
import hu.elte.WashingMachine.entities.WashingMachine;
import hu.elte.WashingMachine.repositories.ReservationRepository;
import hu.elte.WashingMachine.repositories.WashingMachineRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/machines")
public class WashingMachineController {
    @Autowired
    private WashingMachineRepository machineRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<WashingMachine>> getAll() {
        Iterable<WashingMachine> machines = machineRepository.findAll();
        return ResponseEntity.ok(machines);
    }
    
    @PostMapping("")
    public ResponseEntity<WashingMachine> post(@RequestBody WashingMachine machine) {
        machine.setId(null);
        return ResponseEntity.ok(machineRepository.save(machine));
    }
        
    @GetMapping("/{id}")
    public ResponseEntity<WashingMachine> get(@PathVariable Integer id) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oMachine.get());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        machineRepository.delete(oMachine.get());
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<WashingMachine> put(@PathVariable Integer id,
                                              @RequestBody WashingMachine machine) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        machine.setId(id);
        return ResponseEntity.ok(machineRepository.save(machine));
    }
    
    @GetMapping("/{id}/reservations")
    public ResponseEntity<Iterable<Reservation>> getReservations(@PathVariable Integer id) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(oMachine.get().getReservations());
    }
    
    @PostMapping("/{id}/reservations")
    public ResponseEntity<Reservation> postReservations(@PathVariable Integer id,
                                                        @RequestBody Reservation reservation) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        reservation.setId(null);
        reservation.setMachine(oMachine.get());
        return ResponseEntity.ok(reservationRepository.save(reservation));
    }
    
    @PutMapping("/{id}/reservations")
    public ResponseEntity<Iterable<Reservation>> putReservations(@PathVariable Integer id,
                                                                 @RequestBody List<Reservation> reservations) {
        Optional<WashingMachine> oMachine = machineRepository.findById(id);
        if (!oMachine.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        for (Reservation reservation: reservations) {
            Optional<Reservation> oReservation  = reservationRepository.findById(reservation.getId());
            if (!oReservation.isPresent()) {
                continue;
            }
            
            oReservation.get().setMachine(oMachine.get());
            reservationRepository.save(oReservation.get());
        }
        
        return ResponseEntity.ok(oMachine.get().getReservations());
    }
}
