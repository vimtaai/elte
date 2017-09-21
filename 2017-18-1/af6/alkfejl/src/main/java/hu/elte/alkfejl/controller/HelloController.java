package hu.elte.alkfejl.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @RequestMapping("/hello")
    public String hello(@RequestParam(value = "nev", 
                                      required = false, 
                                      defaultValue = "World") String name) {
        return "<h1>Hello " + name + "</h1>";
    }
}
