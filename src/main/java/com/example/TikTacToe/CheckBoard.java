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

    int dim=3;
    int[][]board;

    void showBoard(){
        System.out.println();
        for (int i=0;i<dim;i++) {
            for (int j = 0; j<dim; j++)
                System.out.print(board[i][j]);
            System.out.println();
        }
    }

    boolean checkRowCol(int user){
        for (int i=0;i<dim;i++) { // check rows
            boolean row=true,col=true;
            for (int j = 0; j < dim; j++) {
                if (board[i][j] != user) row = false;
                if (board[j][i] != user) col = false;
            }
            if (col||row) return true;
        }
        return false;
    }

    @ResponseBody
    @RequestMapping(value = "/check/{round}", method = RequestMethod.GET, produces = "application/json")
    public String check(@PathVariable int round){
        dim=round/1000;
        int user=1;
        List<Move> turns=moves.getUserRound(user,round);
//        turns.forEach(t-> System.out.println(t));
        board = new int[dim][dim];
        for (Move move:turns)
            board[move.getRow()][move.getCol()]=user;
//        showBoard();

        if(checkRowCol(user)) return "{\"success\":1}"; // "YOU WIN by ROW!"

        boolean d1=true,d2=true;
        for (int i=0;i<dim;i++) {// check both diag
            if (board[i][i] != user) d1 = false;
            if (board[i][dim-i-1] != user) d2 = false;
        }
        if (d1||d2) return "{\"success\":1}"; // "YOU WIN by DIAG!"

        return "{\"success\":0}"; // "YOU LOOSE"

    }

}