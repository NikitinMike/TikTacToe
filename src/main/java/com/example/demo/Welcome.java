package com.example.demo;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static java.lang.Math.random;

//@Rest
@Controller
public class Welcome {

    @Autowired MovesService moves;
    int turn=0;
    int round=0;
    Long dimension = 10L;

    @RequestMapping("/")
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

//    @RequestMapping("/move/{row}/{col}")
    @RequestMapping("/move/{round}")
//    @RequestMapping("/move")
    @ResponseBody
    @CrossOrigin // (origins = "http://localhost:3000")
//    public String move(@PathVariable int row, @PathVariable int col){
    public Move move(@PathVariable int round) {

        turn = (this.round == round) ? turn + 1 : 0;
        this.round = round;

        Move m = null;

//        do{
            double row = dimension * random();
            double col = dimension * random();
            Long cell = ((int) row) * dimension + (int) col;
            m=moves.create(cell, turn, round);
//            if(m==null) return m; //  "TURN:"+turn+" MOVE WRONG:"+cell;
//        }while(m==null);

        System.out.println(m);
//        return m.toString();
//        return m.toString();
//        return "WELCOME!";
        return m;

    }

}
