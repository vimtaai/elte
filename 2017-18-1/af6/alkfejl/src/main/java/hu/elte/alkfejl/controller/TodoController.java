package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.Todo;
import hu.elte.alkfejl.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/todo")
public class TodoController {
    
    @Autowired
    private TodoRepository todoRepository;
    
    @GetMapping("/list")
    public String list(Model model) {
        Iterable<Todo> list = todoRepository.findAll();
        model.addAttribute("todos", list);
        return "todolist";
    }
    
    @PostMapping("/add")
    public String addTodo() {
        return "redirect:/todo/list";
    }
}
