"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const data1 = calcAverage(6, 7, 8);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log("Dolphins win");
  } else if (avgKoalas > avgDolphins * 2) {
    console.log("Koalas win");
  }
}

//checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
