package hu.elte.alkfejl.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Todo extends BaseEntity {
    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date dueTo;

    @Column
    private Date created = new Date();

    @Column(nullable = false)
    private String text;

    @JoinColumn
    @OneToMany(targetEntity = Comment.class,
               cascade = CascadeType.ALL)
    private List<Comment> commentList;
}
