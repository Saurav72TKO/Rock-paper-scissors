const btns = document.querySelectorAll("button");
const resultEl = document.querySelector("#results");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");

let userScore = Number(localStorage.getItem("userScore")) || 0;
let compScore = Number(localStorage.getItem("compScore")) || 0;

userScoreEl.textContent = userScore;
compScoreEl.textContent = compScore;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // This stops Reset button from also playing a round
    if (btn.id === "reset-btn") return;

    const result = playRound(btn.id, compMove());
    resultEl.textContent = result;
    userScoreEl.textContent = userScore;
    compScoreEl.textContent = compScore;

    localStorage.setItem("userScore", userScore);
    localStorage.setItem("compScore", compScore);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
  resultEl.textContent = "Score reset! Play again.";
  localStorage.removeItem("userScore");
  localStorage.removeItem("compScore");
});

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
