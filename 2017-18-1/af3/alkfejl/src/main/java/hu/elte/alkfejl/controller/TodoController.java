package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.Todo;
import hu.elte.alkfejl.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Iterator;
import java.util.List;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Controller
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/todo")
    public String getTodos(Model model) {
        Iterable<Todo> t = todoRepository.findAll();
        model.addAttribute("todos", t);
        return "todo";
    }
}
