package com.example.demo;

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

    @RequestMapping("/move/{row}/{col}")
    @ResponseBody
    public String move(@PathVariable int row, @PathVariable int col){
//        return "WELCOME!";
        return "MOVE:["+row+","+col+"]";
    }

}
