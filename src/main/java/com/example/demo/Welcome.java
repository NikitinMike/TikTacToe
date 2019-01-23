package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Rest
@Controller
public class Welcome {
    @RequestMapping("/")
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

    @Autowired
    MovesService moves;

    @RequestMapping("/move/{row}/{col}")
    @ResponseBody
    public String move(@PathVariable int row, @PathVariable int col){
//        return "WELCOME!";
        System.out.println("MOVE:["+row+","+col+"]");
        System.out.println(moves.create(row*10L+col));
        return "MOVE:["+row+","+col+"]";
    }

}
