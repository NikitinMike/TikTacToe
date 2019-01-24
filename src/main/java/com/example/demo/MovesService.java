package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovesService {

    @Autowired MovesRepository movesRepository;

    public Move create(int cell, int turn, int round, int row, int col) {
//        List <Move> moves = movesRepository.findAllByRound(round);
//        moves.forEach((m)->System.out.print(m.getCell()+","));
//        List <Move> moves = movesRepository.findAllByCellAndRound(cell,round);
//        if(!moves.isEmpty()) return null;
//        System.out.println("MOVE:"+row+","+col);
        Move move=new Move(cell,turn,round,row,col);
        movesRepository.save(move);
        return move;
    }

}
