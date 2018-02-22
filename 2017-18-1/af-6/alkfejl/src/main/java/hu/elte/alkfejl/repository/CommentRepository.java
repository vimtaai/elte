package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    
}
