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

    private String message;
    private Long cell;
    private Long turn;
    private Long round;
    private String timestamp;

    Move(Long cell){
        this.cell=cell;
    }

//    public ObjectId getId() {
//        return id;
//    }
//    public void setId(ObjectId id) {
//        this.id = id;
//    }
//
//    public String getMessage() {
//        return message;
//    }
//    public void setMessage(final String message) {
//        this.message = message;
//    }
//
//    public String getTimestamp() {
//        return timestamp;
//    }
//    public void setTimestamp(final String timestamp) {
//        this.timestamp = timestamp;
//    }

    @Override
    public String toString() {
        return "LogItem [id=" + id + ", message=" + message + ", timestamp=" + timestamp + "]";
    }
}
