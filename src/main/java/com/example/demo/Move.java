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

    private int row;
    private int col;
    private int cell;
    private int turn;
    private int round;

    Move(int cell,int turn,int round,int row,int col){
        this.cell=cell;
        this.turn=turn;
        this.round=round;
        this.row=row;
        this.col=col;
    }

    public int getCell(){return cell;}

    @Override
    public String toString() {return "MOVE:[id=" + id + ", Round=" + round+ ", Turn=" + turn + ", Cell=" + cell+ ", Row=" + row + ", Col=" + col + "]";}
}
