const btns = document.querySelectorAll("button");
const resultEl = document.querySelector("#results");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#computer-score");

let userScore = 0;
let compScore = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`you clicked ${btn.id}`);

    const result = playRound(btn.id, compMove());
    console.log(result);
    resultEl.textContent = result;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;
  });
});

// functions

function compMove() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(userMove, compMove) {
  if (userMove === compMove) {
    return "it's a tie!";
  } else if (
    (userMove === "rock" && compMove === "scissors") ||
    (userMove === "paper" && compMove === "rock") ||
    (userMove === "scissors" && compMove === "paper")
  ) {
    userScore++;

    return `You win! ${userMove} beats ${compMove}`;
  } else {
    compScore++;
    return `You lose! ${compMove} beats ${userMove}`;
  }
}
