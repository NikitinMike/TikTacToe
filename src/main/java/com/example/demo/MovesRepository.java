package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovesRepository extends JpaRepository<Move, Long> {
    List<Move> findAllByCell(int cell);
    List<Move> findAllByRound(int round);
    List<Move> findAllByCellAndRound(int cell, int round);
}
