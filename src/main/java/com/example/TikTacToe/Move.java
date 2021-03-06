package com.example.TikTacToe;

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
    private Long round;
    private int user;

    Move(int cell,int turn,Long round,int row,int col,int user){
        this.cell=cell;
        this.turn=turn;
        this.round=round;
        this.row=row;
        this.col=col;
        this.user=user;
    }

    public int getCell(){return cell;}
    public Long getRound(){return round;}
    public int getRow(){return row;}
    public int getCol(){return col;}

    @Override
    public String toString() {
        return "MOVE:[id=" + id + ", Round=" + round+ ", User=" + user + ", Turn=" + turn
                + ", Cell=" + cell+ ", Row=" + row + ", Col=" + col + "]";
    }
}
