package com.example.demo;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;

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

    @Override
    public String toString() {return "MOVE:[id=" + id + ", Round=" + round+ ", Turn=" + turn + ", Move=" + cell + "]";}
    // "MOVE:["+row+","+col+"]";
}
