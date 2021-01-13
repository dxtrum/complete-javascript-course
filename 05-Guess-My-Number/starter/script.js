"use strict";

let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
let score = Number(document.querySelector(".score").textContent);
console.log(score);

function lowerScore(mes) {
  document.querySelector(".message").textContent = mes;
  score--;
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Hey, that's not a number";
  } else if (guess === num) {
    document.querySelector(".message").textContent = "YOU DID IT";
    document.querySelector(".number").textContent = num;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    let highscore = Number(document.querySelector(".highscore").textContent);
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > num) {
    if (score > 1) {
      lowerScore("Too High");
    } else {
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < num) {
    if (score > 1) {
      lowerScore("Too Low");
    } else {
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  num = Math.trunc(Math.random() * 20) + 1;
  console.log(num);
});
