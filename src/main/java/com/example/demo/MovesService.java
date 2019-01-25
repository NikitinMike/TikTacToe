package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovesService {

    @Autowired MovesRepository movesRepository;

    public Move create(int cell, int turn, int round, int row, int col, int user) {
        Move move=new Move(cell,turn,round,row,col,user);
        movesRepository.save(move);
        return move;
    }

    private Sort sort() {
        return new Sort(Sort.Direction.DESC, "id");
    }

    public  List<Move> getAll() {
        return movesRepository.findAll(sort());
    }

}
