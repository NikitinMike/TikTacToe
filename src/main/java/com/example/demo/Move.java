package com.example.demo;

import java.io.Serializable;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "Moves")
public class Move implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long cell;
    private Long turn;
    private Long round;

    Move(Long cell,Long turn,Long round){
        this.cell=cell;
        this.turn=turn;
        this.round=round;
    }

    public Long getCell(){return cell;}

    @Override
    public String toString() {return "MOVE:[id=" + id + ", Round=" + round+ ", Move=" + turn + ", Cell=" + cell + "]";}
}
