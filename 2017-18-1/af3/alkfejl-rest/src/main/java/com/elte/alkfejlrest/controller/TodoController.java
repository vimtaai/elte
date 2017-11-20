package com.elte.alkfejlrest.controller;

import com.elte.alkfejlrest.entity.Todo;
import com.elte.alkfejlrest.entity.User;
import com.elte.alkfejlrest.repository.TodoRepository;
import com.elte.alkfejlrest.repository.UserRepository;
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
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Todo>> getAll() {
        Iterable<Todo> todos = todoRepository.findAll();
        return ResponseEntity.ok(todos);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Todo> getOne(@PathVariable Integer id) {
        Todo todo = todoRepository.findOne(id);
        return ResponseEntity.ok(todo);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Iterable<Todo>> getAllByUser(@PathVariable Integer userId) {
        User user = userRepository.findOne(userId);
        Iterable<Todo> todos = todoRepository.findAllByUser(user);
        return ResponseEntity.ok(todos);
    }
    
    @PostMapping("")
    public ResponseEntity<Todo> create(@RequestBody Todo todo) {
        Todo saved = todoRepository.save(todo);
        return ResponseEntity.ok(saved);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Todo> update(@PathVariable Integer id, @RequestBody Todo todo) {
        Todo current = todoRepository.findOne(id);
        current.setText(todo.getText());
        Todo saved = todoRepository.save(current);
        return ResponseEntity.ok(saved);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity update(@PathVariable Integer id) {
        todoRepository.delete(id);
        Iterable<Todo> todos = todoRepository.findAll();
        return ResponseEntity.ok(todos);
    }
}
