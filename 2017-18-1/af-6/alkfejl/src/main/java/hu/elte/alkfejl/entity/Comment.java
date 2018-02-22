package hu.elte.alkfejl.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Comment extends BaseEntity{
    @Column(nullable=false)
    private String text;
    
    @JoinColumn
    @ManyToOne(targetEntity = Todo.class)
    private Todo todo;
}
