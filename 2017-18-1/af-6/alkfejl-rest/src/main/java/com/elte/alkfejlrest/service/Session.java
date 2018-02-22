package com.elte.alkfejlrest.service;

import com.elte.alkfejlrest.entity.User;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Data
@Service
@SessionScope
public class Session {
    private User user;
}