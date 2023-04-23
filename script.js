"use strict";

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const again = document.querySelector(".again");
let number = document.querySelector(".number");
let scoreMessage = document.querySelector(".score");
let guess = document.querySelector(".guess");
let score = 20;
let highscore = 0;

check.addEventListener("click", () => {
  guess = document.querySelector(".guess").value;
  if (!guess) {
    message.textContent = "No number";
  } else if (randomNumber == guess) {
    document.body.style.background = "#60b347";
    message.textContent = "🏆It's a match";
    number.textContent = randomNumber;
    number.style.width = "30rem";
    check.disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (randomNumber < guess) {
    score--;
    scoreMessage.textContent = score;
    message.textContent = "⬆️too high";
  } else if (randomNumber > guess) {
    score--;
    scoreMessage.textContent = score;
    message.textContent = "⬇️too low";
  }
});

again.addEventListener("click", () => {
  document.querySelector(".guess").value = "";
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  number.textContent = "?";
  number.style.width = "15rem";
  document.body.style.background = "#222";
  message.textContent = "Start guessing...";
  scoreMessage.textContent = 20;
  check.disabled = true;
});
