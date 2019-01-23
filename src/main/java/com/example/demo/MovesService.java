package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovesService {

    @Autowired MovesRepository movesRepository;

    public Move create(Long cell, long turn, long round) {
        Move move=new Move(cell,turn,round);
        movesRepository.save(move);
        return move;
    }

}
