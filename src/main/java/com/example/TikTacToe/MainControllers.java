package com.example.TikTacToe;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

//@Rest
@Controller
@CrossOrigin // (origins = "http://localhost:3000")
public class MainControllers {

    @Autowired MovesService moves;
    int turn=0;
    int round=0;
//    int dimension = 3;

//    @ResponseBody
    @RequestMapping({"/welcome","/"})
    public String welcome(){
//        return "WELCOME!";
        return "welcome";
    }

    @RequestMapping("/moves")
    public String /*List<Move>*/ getAll(Model model){
        model.addAttribute("moves", moves.getAll());
        return "moves";
    }

    @ResponseBody
    @RequestMapping("/move/{dimension}/{round}/{user}/{row}/{col}")
    public Move move(
        @PathVariable int dimension,
        @PathVariable int round,
        @PathVariable int user,
        @PathVariable int row,
        @PathVariable int col
    ) {
        turn = (this.round == round) ? turn + 1 : 1;
        this.round = round;
        if(user==0) turn=0;

        int cell = row*dimension+col;
        Move m=moves.create(cell,turn,round,row,col,user);

        System.out.println(m);
        return m;
    }

    @RequestMapping("/result/{round}")
    public String result(@PathVariable int round,Model model){
        List<Move> turns=moves.getRound(round);
        model.addAttribute("moves", turns);
        turns.forEach(t-> System.out.println(t));
        return "welcome";
    }

    @ResponseBody
    @RequestMapping("/results")
    public Set<Long> result(){
//        List<Long> rounds=moves.listRounds();
//        rounds.forEach(t-> System.out.println(t));
        return moves.listRounds();
    }

}
