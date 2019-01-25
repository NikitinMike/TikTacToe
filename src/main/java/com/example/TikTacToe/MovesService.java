package com.example.TikTacToe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MovesService {

    @Autowired MovesRepository movesRepository;

    public Move create(int cell, int turn, int round, int row, int col, int user) {
        Move move=new Move(cell,turn,(long)round,row,col,user);
        movesRepository.save(move);
        return move;
    }

    private Sort sort() {
        return new Sort(Sort.Direction.DESC, "id");
    }

    public  List<Move> getAll() {
        return movesRepository.findAll(sort());
    }

    public  List<Move> getRound(int round) {
        return movesRepository.findAllByRound((long)round);
    }

    public  List<Move> getUserRound(int user,int round) {
        return movesRepository.findAllByRoundAndUser((long)round,user);
    }

    public Set<Long> listRounds() {
//        List<Move> rounds = movesRepository.findDistinctByUser(0);
        List<Move> moves = movesRepository.findDistinctByTurn(1);
//        moves.forEach(t-> System.out.println(t.getRound()));
        return moves.stream().map(m -> m.getRound()).collect(Collectors.toSet());
    }

}
