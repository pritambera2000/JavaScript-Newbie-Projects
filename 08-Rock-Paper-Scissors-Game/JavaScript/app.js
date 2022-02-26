const buttons = document.querySelectorAll(".hand");
const scoreEl = document.getElementById('score');
const choices = ["rock", "paper", "scissors"];

// console.log(randomChoice());

let userChoice;
let score = 0;
buttons.forEach(button => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    console.log(userChoice);
    
    checkWinner();
  });
});
function checkWinner() {
    const computerChoice = randomChoice();
    console.log(computerChoice);
    
    if (userChoice === computerChoice) {
      //user draw
    } else if (
      (userChoice === "Paper" && computerChoice === "rock") ||
      (userChoice === "Scissors" && computerChoice === "paper") ||
      (userChoice === "Rock" && computerChoice === "scissors")
    ) {
      //user won
      updateScore(1);
    } else {
      // user lost
      updateScore(-1);
    }
  }
  function updateScore(value){
      score += value
      scoreEl.innerText = score;
  }

function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

