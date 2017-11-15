package com.elte.alkfejlrest.controller;

import com.elte.alkfejlrest.entity.FamilyMember;
import com.elte.alkfejlrest.repository.FamilyMemberRepository;
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
@RequestMapping("/api/family")
public class FamilyMemberController {
    @Autowired
    private FamilyMemberRepository familyMemberRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<FamilyMember>> getAll() {
        Iterable<FamilyMember> members = familyMemberRepository.findAll();
        return ResponseEntity.ok(members);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<FamilyMember> getOne(@PathVariable Integer id) {
        FamilyMember member = familyMemberRepository.findOne(id);
        return ResponseEntity.ok(member);
    }
    
    @PostMapping("")
    public ResponseEntity<FamilyMember> create(@RequestBody FamilyMember item) {
        FamilyMember saved = familyMemberRepository.save(item);
        return ResponseEntity.ok(saved);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<FamilyMember> update(@PathVariable Integer id, @RequestBody FamilyMember member) {
        FamilyMember current = familyMemberRepository.findOne(id);
        current.setName(member.getName());
        FamilyMember saved = familyMemberRepository.save(current);
        return ResponseEntity.ok(saved);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity update(@PathVariable Integer id) {
        familyMemberRepository.delete(id);
        return ResponseEntity.ok().build();
    }
}
