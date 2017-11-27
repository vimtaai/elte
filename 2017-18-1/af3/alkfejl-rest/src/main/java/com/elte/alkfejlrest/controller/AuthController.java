package com.elte.alkfejlrest.controller;

import com.elte.alkfejlrest.entity.User;
import com.elte.alkfejlrest.repository.UserRepository;
import com.elte.alkfejlrest.service.Session;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    Session session;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @RequestMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        Optional<User> dbUser =
            userRepository.findByEmail(user.getEmail());
        if (dbUser.isPresent() && passwordEncoder.matches(user.getPassword(), 
                                                          dbUser.get().getPassword())) {
            session.setUser(dbUser.get());
            return ResponseEntity.ok(dbUser.get());
        } else {
            return ResponseEntity.status(403).build();
        }
    }
    
    @RequestMapping("/logout")
    public ResponseEntity logout() {
        session.setUser(null);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser() {
        if (session.getUser() == null) {
            return ResponseEntity.ok(null);
        } else {
            return ResponseEntity.ok(session.getUser());
        }
    }
}