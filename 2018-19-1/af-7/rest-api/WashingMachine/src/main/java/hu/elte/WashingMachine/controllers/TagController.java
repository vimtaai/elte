package hu.elte.WashingMachine.controllers;

import hu.elte.WashingMachine.entities.Reservation;
import hu.elte.WashingMachine.entities.Tag;
import hu.elte.WashingMachine.repositories.ReservationRepository;
import hu.elte.WashingMachine.repositories.TagRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tags")
public class TagController {
    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Tag>> getAll() {
        return ResponseEntity.ok(tagRepository.findAll());
    }
    
    @PostMapping("")
    public ResponseEntity<Tag> post(@RequestBody Tag tag) {
        tag.setId(null);
        return ResponseEntity.ok(tagRepository.save(tag));
    }
    
    @GetMapping("/{id}/reservations")
    public ResponseEntity<Iterable<Reservation>> getReservations(@PathVariable Integer id) {
        Optional<Tag> oTag = tagRepository.findById(id);
        if (!oTag.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        return ResponseEntity.ok(oTag.get().getReservations());
    }
}
