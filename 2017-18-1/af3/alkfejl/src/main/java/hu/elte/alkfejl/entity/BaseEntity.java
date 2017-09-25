package hu.elte.alkfejl.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by vimtaai on 2017. 09. 25..
 */
@Data
@MappedSuperclass
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Version
    private int version;
}
