package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Todo;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Iterator;
import java.util.List;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Controller
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;

    @Role({User.Role.ADMIN, User.Role.USER})
    @GetMapping("/todo")
    public String getTodos(Model model) {
        Iterable<Todo> t = todoRepository.findAll();
        Todo newTodo = new Todo();
        model.addAttribute("todos", t);
        model.addAttribute("newTodo", newTodo);
        return "todo";
    }

    @Role({User.Role.ADMIN})
    @PostMapping("/addtodo")
    public String addTodo(@ModelAttribute Todo todo) {
        todoRepository.save(todo);
        return "redirect:/todo";
    }
}
