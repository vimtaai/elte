package hu.elte.alkfejl.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.Date;

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
    private Date dueTo;

    @Column
    private Date created;

    @Column(nullable = false)
    private String text;
}
