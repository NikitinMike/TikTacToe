package com.example.demo;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Math.random;

//@Rest
@Controller
public class Welcome {

    @Autowired MovesService moves;
    int turn=0;
    int round=0;
//    int dimension = 3;

    @RequestMapping("/welcome")
    public String welcome(){
//        return "welcome";
        return "WELCOME!";
    }

    @ResponseBody
    @RequestMapping("/")
    public List<Move> getAll(){
        return moves.getAll(); // .forEach(m-> System.out.println(m));
    }

    @RequestMapping("/move/{dimension}/{round}/{user}/{row}/{col}")
    @ResponseBody
    @CrossOrigin // (origins = "http://localhost:3000")
    public Move move(@PathVariable int dimension,@PathVariable int round,@PathVariable int user,@PathVariable int row,@PathVariable int col) {

        turn = (this.round == round) ? turn + 1 : 0;
        this.round = round;

        int cell = row*dimension+col;
        Move m=moves.create(cell,turn,round,row,col,user);

        System.out.println(m);
//        return m.toString();
        return m;

    }

}
