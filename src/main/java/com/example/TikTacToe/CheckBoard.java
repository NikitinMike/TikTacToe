package com.example.TikTacToe;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@Controller
@CrossOrigin // (origins = "http://localhost:3000")
public class CheckBoard {

    @Autowired
    MovesService moves;

    @ResponseBody
    @RequestMapping(value = "/check/{round}", method = RequestMethod.GET, produces = "application/json")
    public String check(@PathVariable int round){
        int user=1;
        List<Move> turns=moves.getUserRound(user,round);
        int dim=3;
//        turns.forEach(t-> System.out.println(t));
        int[][]board = new int[dim][dim];
        for (Move move:turns) {
//            System.out.println(move);
            board[move.getRow()][move.getCol()]=user;
        }

//        void showBoard(){
        System.out.println();
        for (int i=0;i<dim;i++) {
            for (int j = 0; j<dim; j++)
                System.out.print(board[i][j]);
            System.out.println();
        }
//        }

        for (int i=0;i<dim;i++) { // check rows
            boolean win=true;
            for (int j = 0; j < dim; j++)
                if (board[i][j] != user) win=false;
            if(win) return "{\"success\":1}"; // "YOU WIN by ROW!"
        }

        for (int i=0;i<dim;i++) { // check columns
            boolean win=true;
            for (int j = 0; j < dim; j++)
                if (board[j][i] != user) win=false;
            if(win) return "{\"success\":1}"; // "YOU WIN by COL!"
        }

        boolean win=true;
        for (int i=0;i<dim;i++) // check main diag
            if (board[i][i] != user) win=false;
        if(win) return "{\"success\":1}"; // "YOU WIN by DIAG!"

        win=true;
        for (int j=0;j<dim;j++) // check diag2
            if (board[j][dim-1-j] != user) win=false;
        if(win) return "{\"success\":1"; // "YOU WIN by DIAG!"

        return "{\"success\":0}"; // "YOU LOOSE"

    }

}