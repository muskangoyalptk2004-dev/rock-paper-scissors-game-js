let userScore = 0;
let compScore = 0;

const msg = document.getElementById("mssg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("computer-score");

function play(userChoice) {
  const options = ["rock", "paper", "scissors"];
  const compChoice = options[Math.floor(Math.random() * 3)];

  if (userChoice === compChoice) {
    msg.innerText = "It's a Draw!";
    return;
  }

  if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundcolor="green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose!";
    msg.style.backgroundcolor="red";
  }
}

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

