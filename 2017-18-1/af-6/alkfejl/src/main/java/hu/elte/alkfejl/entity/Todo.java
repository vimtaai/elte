package hu.elte.alkfejl.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Todo extends BaseEntity {
    @Column(nullable = false)
    private String text;
    
    @OneToMany(targetEntity = Comment.class, 
               cascade = CascadeType.ALL,
               mappedBy = "todo")
    private List<Comment> comments;
}
