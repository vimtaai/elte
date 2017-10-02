package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import hu.elte.alkfejl.service.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    Session session;

    @Autowired
    UserRepository userRepository;

    @RequestMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> dbUser =
            userRepository.findByEmailAndPassword(user.getEmail(),
                                                  user.getPassword());
        if (dbUser.isPresent()) {
            session.setUser(dbUser.get());
            return "logged in";
        } else {
            return "invalid username and/or password";
        }
    }

    @GetMapping("/isloggedin")
    public String isLoggedIn() {
        if (session.getUser() == null) {
            return "not logged in";
        } else {
            return session.getUser().toString();
        }
    }
}
