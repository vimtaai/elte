package hu.elte.alkfejl.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by vimtaai on 2017. 09. 18..
 */
@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello(@RequestParam(value = "nev", defaultValue = "World") String name) {
        return "Hello <b>" + name + "</b>";
    }
}
