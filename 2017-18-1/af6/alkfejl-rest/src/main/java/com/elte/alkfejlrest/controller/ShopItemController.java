package com.elte.alkfejlrest.controller;

import com.elte.alkfejlrest.annotation.Role;
import com.elte.alkfejlrest.entity.FamilyMember;
import com.elte.alkfejlrest.entity.ShopItem;
import com.elte.alkfejlrest.entity.User;
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
import com.elte.alkfejlrest.repository.ShopItemRepository;

@RestController
@RequestMapping("/api/items")
public class ShopItemController {
    @Autowired
    private ShopItemRepository shopItemRepository;
    @Autowired
    private FamilyMemberRepository familyMemberRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<ShopItem>> getAll() {
        Iterable<ShopItem> items = shopItemRepository.findAll();
        return ResponseEntity.ok(items);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ShopItem> getOne(@PathVariable Integer id) {
        ShopItem item = shopItemRepository.findOne(id);
        return ResponseEntity.ok(item);
    }
    
    @Role({User.Role.ADMIN})
    @PostMapping("")
    public ResponseEntity<ShopItem> create(@RequestBody ShopItem item) {
        ShopItem saved = shopItemRepository.save(item);
        return ResponseEntity.ok(saved);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ShopItem> update(@PathVariable Integer id, @RequestBody ShopItem item) {
        ShopItem current = shopItemRepository.findOne(id);
        current.setText(item.getText());
        current.setCount(item.getCount());
        current.setFamilyMember(item.getFamilyMember());
        ShopItem saved = shopItemRepository.save(current);
        return ResponseEntity.ok(saved);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        shopItemRepository.delete(id);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/owner/{id}")
    public ResponseEntity<Iterable<ShopItem>> getByFamilyMember(@PathVariable Integer id) {
        FamilyMember fm = familyMemberRepository.findOne(id);
        return ResponseEntity.ok(fm.getItems());
    }
}
