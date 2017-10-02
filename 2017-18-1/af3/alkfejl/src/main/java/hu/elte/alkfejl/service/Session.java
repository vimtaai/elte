package hu.elte.alkfejl.service;

import hu.elte.alkfejl.entity.User;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Data
@Service
@SessionScope
public class Session {
    private User user;
}
