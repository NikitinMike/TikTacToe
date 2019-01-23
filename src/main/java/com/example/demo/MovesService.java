package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovesService {

    @Autowired MovesRepository movesRepository;

    public Move create(Long cell, long turn, long round) {
        List <Move> moves = movesRepository.findAllByRound(round);
//        moves.forEach((m)->System.out.print(m.getCell()+","));
        moves = movesRepository.findAllByCellAndRound(cell,round);
        if(!moves.isEmpty()) return null;
        Move move=new Move(cell,turn,round);
        movesRepository.save(move);
        return move;
    }

}
