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

    @RequestMapping("/")
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

//    @RequestMapping("/move/{row}/{col}")
    @RequestMapping("/move")
    @ResponseBody
//    public String move(@PathVariable int row, @PathVariable int col){
    public String move(){
        Long size = 10L;
//        return "WELCOME!";
        double row=size*random();
        double col=size*random();
        Long cell=((int)row)*size+(int)col;
        Move m = moves.create(cell,0L,0L);
        System.out.println(m);
        return m.toString();
    }

}
