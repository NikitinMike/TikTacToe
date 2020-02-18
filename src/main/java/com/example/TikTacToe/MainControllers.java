package com.example.TikTacToe;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

import static java.lang.Math.random;

@Controller
@CrossOrigin
public class MainControllers {

  @Autowired
  MovesService moves;
  int turn = 0;
  int round = 0;
  int dimension = 4;

  @RequestMapping({"/welcome", "/"})
  public String welcome() {
    return "welcome";
  }

  @RequestMapping("/{dimension}")
  public String resize(@PathVariable int dimension, Model model) {
    this.dimension = dimension;
    model.addAttribute("dimension", dimension);
    return "welcome";
  }

  @RequestMapping("/moves")
  public String getAll(Model model) {
    model.addAttribute("moves", moves.getAll());
    return "moves";
  }

  @ResponseBody
  @RequestMapping("/move/{dimension}/{round}/{user}/{row}/{col}")
  public String move(
      @PathVariable int dimension,
      @PathVariable int round,
      @PathVariable int user,
      @PathVariable int row,
      @PathVariable int col
  ) {
    turn = (this.round == round) ? turn + 1 : 1;
    this.round = round;
      if (user == 0) {
          turn = 0;
      }

    int cell = row * dimension + col;
      if (!moves.isCellFree(cell, turn, round, row, col, user)) {
          return "{\"success\":false}";
      }
    Move m = moves.create(cell, turn, round, row, col, user);

    System.out.println(m);
    return "{\"success\":true}";
//        return m;
  }

  @RequestMapping("/result/{round}")
  public String result(@PathVariable int round, Model model) {
    List<Move> turns = moves.getRound(round);
    model.addAttribute("moves", turns);
    turns.forEach(System.out::println);
    return "welcome";
  }

  @ResponseBody
  @RequestMapping("/results")
  public Set<Long> result() {
    return moves.listRounds();
  }

  @ResponseBody
  @RequestMapping("/computer/{round}")
  public JSONObject move(@PathVariable int round) {
    int dim = round / 1000;
    int size = dim * dim;
    int cell = (int) (random() * size);
    JSONObject json = new JSONObject();
    json.put("cell", cell);
    System.out.println("COMPUTER:" + json);
    return json;
  }

}
