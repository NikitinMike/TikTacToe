package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.Math.random;

//@Rest
@Controller
public class Welcome {

    @Autowired MovesService moves;
    int turn=0;
    int round=0;
    Long size = 10L;

    @RequestMapping("/")
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

//    @RequestMapping("/move/{row}/{col}")
    @RequestMapping("/move/{round}")
//    @RequestMapping("/move")
    @ResponseBody
//    public String move(@PathVariable int row, @PathVariable int col){
    public String move(@PathVariable int round) {

        turn = (this.round == round) ? turn + 1 : 0;
        this.round = round;

        Move m = null;
        do{
            double row = size * random();
            double col = size * random();
            Long cell = ((int) row) * size + (int) col;
            m=moves.create(cell, turn, round);
            if(m==null) return "TURN:"+turn+" MOVE WRONG:"+cell;
        }while(m==null);

        System.out.println(m);
        return m.toString();
//        return "WELCOME!";

    }

}
