/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarExcusa() {
  //write your code here
  let who = [
    "My puppy",
    "My mom",
    "My noisy neighbor",
    "My bird",
    "My cat",
    "My cousin"
  ];
  let action = ["ate", "peed", "crushed", "broke", "lost", "hide"];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "the proyect",
    "the concert ticket",
    "the shopping list"
  ];
  let when = [
    "before the class",
    "on my way out",
    "yesterday",
    "during my lunch",
    "while I was praying",
    "during my doctor`s appointment"
  ];
  let randomwho = who[Math.floor(Math.random() * who.length)];

  let randomaction = action[Math.floor(Math.random() * action.length)];

  let randomwhat = what[Math.floor(Math.random() * what.length)];

  let randomwhen = when[Math.floor(Math.random() * when.length)];

  document.getElementById(
    "excuse"
  ).innerHTML = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
  console.log("Hello Rigo from the console!");
};
