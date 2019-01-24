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
//    int dimension = 3;

    @RequestMapping("/")
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

    @RequestMapping("/move/{dimension}/{round}/{row}/{col}")
//    @RequestMapping("/move/{round}")
//    @RequestMapping("/move")
    @ResponseBody
    @CrossOrigin // (origins = "http://localhost:3000")
//    public String move(@PathVariable int row, @PathVariable int col){
    public Move move(@PathVariable int dimension,@PathVariable int round,@PathVariable int row,@PathVariable int col) {

        turn = (this.round == round) ? turn + 1 : 0;
        this.round = round;

        int cell = row*dimension+col;
        Move m=moves.create(cell,turn,round,row,col);

        System.out.println(m);
//        return m.toString();
//        return "WELCOME!";
        return m;

    }

}
