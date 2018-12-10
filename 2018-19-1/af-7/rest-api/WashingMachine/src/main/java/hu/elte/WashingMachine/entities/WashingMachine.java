package hu.elte.WashingMachine.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class WashingMachine implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @NotNull
    private String building;
    
    @Column
    @NotNull
    private Integer floor;
    
    @Column
    @NotNull
    private Integer number;
    
    @Column
    private Boolean outOfOrder;
    
    @JsonIgnore
    @OneToMany(mappedBy = "machine")
    private List<Reservation> reservations;
}
