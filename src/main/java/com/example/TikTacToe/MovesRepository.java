package com.example.TikTacToe;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovesRepository extends JpaRepository<Move, Long> {

  List<Move> findAllByRound(long round);

  List<Move> findAllByRoundAndUser(long round, int user);

  List<Move> findDistinctByTurn(int turn);

  Move findByRoundAndCell(long round, int cell);
}
