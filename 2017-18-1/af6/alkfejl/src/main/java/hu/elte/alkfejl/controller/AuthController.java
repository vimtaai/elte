package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import hu.elte.alkfejl.service.SessionService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SessionService sessionService;
    
    @GetMapping("/login")
    public String getLogin(Model model) {
        User loginUser = new User();
        model.addAttribute("loginUser", 
                           loginUser);        
        return "login";
    }
    
    @PostMapping("/login")
    public String postLogin(
            @ModelAttribute User loginUser) {
        Optional<User> login = 
            userRepository.findByUsernameAndPassword(
            loginUser.getUsername(), 
            loginUser.getPassword());
        if(login.isPresent()) {
            System.out.println("Login successful");
            System.out.println(login.get().toString());
            sessionService.setCurrentUser(login.get());
        } else {
            System.out.println("Login failed");
        }
        return "redirect:/auth/login";
    }
    
    @RequestMapping("/logout")
    public String logout() {
        sessionService.setCurrentUser(null);
        return "redirect:/auth/login";
    }
    
    @RequestMapping("/debug")
    public String debug() {
        System.out.println(sessionService.getCurrentUser());
        return "redirect:/auth/login";
    }
}