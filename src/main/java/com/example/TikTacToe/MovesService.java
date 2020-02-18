package com.example.TikTacToe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class MovesService {

  @Autowired
  MovesRepository movesRepository;

  public Move create(int cell, int turn, int round, int row, int col, int user) {
    Move move = new Move(cell, turn, (long) round, row, col, user);
    movesRepository.save(move);
    return move;
  }

  private Sort sort() {
    return new Sort(Sort.Direction.DESC, "id");
  }

  public List<Move> getAll() {
    return movesRepository.findAll(sort());
  }

  public List<Move> getRound(int round) {
    return movesRepository.findAllByRound(round);
  }

  public List<Move> getUserRound(int user, int round) {
    return movesRepository.findAllByRoundAndUser(round, user);
  }

  public Set<Long> listRounds() {
    List<Move> moves = movesRepository.findDistinctByTurn(1);
    return moves.stream().map(Move::getRound).collect(Collectors.toSet());
  }

  public boolean isCellFree(int cell, int turn, int round, int row, int col, int user) {
    Move move = movesRepository.findByRoundAndCell(round, cell);
    return move == null;
  }
}
