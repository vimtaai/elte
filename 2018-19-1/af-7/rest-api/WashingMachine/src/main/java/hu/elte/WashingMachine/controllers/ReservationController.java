package hu.elte.WashingMachine.controllers;

import hu.elte.WashingMachine.entities.Reservation;
import hu.elte.WashingMachine.entities.WashingMachine;
import hu.elte.WashingMachine.repositories.ReservationRepository;
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
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationRepository reservationRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Reservation>> getAll() {
        return ResponseEntity.ok(reservationRepository.findAll());
    }
    
    @PostMapping("")
    public ResponseEntity<Reservation> post(@RequestBody Reservation reservation) {
        reservation.setId(null);
        return ResponseEntity.ok(reservationRepository.save(reservation));
    }
        
    @GetMapping("/{id}")
    public ResponseEntity<Reservation> get(@PathVariable Integer id) {
        Optional<Reservation> oReservation = reservationRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oReservation.get());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Reservation> oReservation = reservationRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        reservationRepository.delete(oReservation.get());
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Reservation> put(@PathVariable Integer id,
                                           @RequestBody Reservation reservation) {
        Optional<Reservation> oReservation = reservationRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        reservation.setId(id);
        return ResponseEntity.ok(reservationRepository.save(reservation));
    }
    
    @GetMapping("/{id}/machine")
    public ResponseEntity<WashingMachine> getMachine(@PathVariable Integer id) {
        Optional<Reservation> oReservation = reservationRepository.findById(id);
        if (!oReservation.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(oReservation.get().getMachine());
    }
}
