package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovesRepository extends JpaRepository<Move, Long> {
    List<Move> findAllByCell(Long cell);
    List<Move> findAllByRound(Long round);
}
