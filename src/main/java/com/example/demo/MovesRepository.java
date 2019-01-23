package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovesRepository extends JpaRepository<Move, Long> {
//    Move findAccountByNumber(String number);
}
