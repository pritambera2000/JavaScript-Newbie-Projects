let Score = 0;

const pickPlayersChoice = hand => {
  // Hiding the triangle

  let gameBoard = document.querySelector(".game-board");
  gameBoard.style.display = "none";

  // SHowing the contest section
  let contest = document.querySelector(".contest");
  contest.style.display = "grid";

  // User Picked Hand
  if (hand == "rock") {
    document.getElementById("userPickedHand").src = "assets/images/Rock.png";
  } else if (hand == "paper") {
    document.getElementById("userPickedHand").src = "assets/images/Paper.png";
  } else if (hand == "scissors") {
    document.getElementById("userPickedHand").src =
      "assets/images/Scissors.png";
  }

  let compHand = pickComputerHand();
  reffere(hand, compHand);
};
//Picking Computer Hand
const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  let compHand = hands[Math.floor(Math.random() * 3)];

  if (compHand == "rock") {
    document.getElementById("computerPickedHand").src =
      "assets/images/Rock.png";
  } else if (compHand == "paper") {
    document.getElementById("computerPickedHand").src =
      "assets/images/Paper.png";
  } else if (compHand == "scissors") {
    document.getElementById("computerPickedHand").src =
      "assets/images/Scissors.png";
  }

  return compHand;
};
// Making Decision For WIN LOOSE or TIE
const reffere = (hand, compHand) => {
  if (hand === compHand) {
    setDecision("It's a Tie");
  } else if (
    (hand === "paper" && compHand === "rock") ||
    (hand === "scissors" && compHand === "paper") ||
    (hand === "rock" && compHand === "scissors")
  ) {
    setDecision("You Win!");
    setScore(Score + 1);
  } else {
    setDecision("You Loose");
  }
};

// WIN LOOSE or TIE
const setDecision = decision => {
  document.querySelector(".decision h1").innerText = decision;
};
//Setting the Score

const setScore = score => {
  Score = score;
  document.getElementById("score").innerText = score;
};
//Function For Restarting the game on Play Again Button Click
const restartGame = () => {
  let gameBoard = document.querySelector(".game-board");
  gameBoard.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};
