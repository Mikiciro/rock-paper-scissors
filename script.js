const choises = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return choises[Math.floor(Math.random() * choises.length)];
}

//function game() {
  // var player = 0;
  // var computer = 0;
  // var round = 3;
  // for (let i = 0; i < round; i++) {
  //   var playerChoice = document.getElementById("playerChoice").value;
  //   var computerChoice = getComputerChoice();
  //   document.getElementById("computerChoice").value = computerChoice;
  //   var result = playRound(playerChoice, computerChoice);
  //   if (result.includes("win")) {
  //     player++;
  //   } else if (result.includes("lose")) {
  //     computer++;
  //   }
  //   document.getElementById("gameResult").innerHTML = result + "<br>";
  // }
  // if (player > computer) {
  //   document.getElementById("gameResult").innerHTML += " Greatings! You win!";
  // } else if (player == computer) {
  //   document.getElementById("gameResult").innerHTML += " It's a Draw! Another game?";
  // } else {
  //   document.getElementById("gameResult").innerHTML += " Sorry! You lose!";
  // }
//}

const rock = document.querySelector("#rock");
rock.addEventListener('click', playRound);
const paper = document.querySelector("#paper");
paper.addEventListener('click', playRound);
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', playRound);

function playRound(playerSelection, computerSelection) {
  var winAgainst = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
  };

  if (playerSelection, computerSelection) {
    console.log("draw");
  }

  if (winAgainst[playerSelection], computerSelection) {
    return console.log("you win");
  } else {
    return console.log("you lose");
  }
}



//   if (equals(playerSelection, computerSelection)) {
//     return "Draw";
//   }
//   if (equals(winAgainst[playerSelection], computerSelection)) {
//     return "You win! " + playerSelection + " beat " + computerSelection;
//   } else {
//     return "You lose! " + computerSelection + " beat " + playerSelection;
//   }

// function equals(a, b) {
//   return a.toLowerCase() == b.toLowerCase();
// }

//FUNZIONE DEI TEST

// function testPlayRound() {
//   if (playRound("paper", "scissors") == "You lose! scissors beat paper") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("paper", "rock") == "You win! paper beat rock") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("paper", "paper") == "Draw") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("rock", "paper") == "You lose! paper beat rock") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("rock", "scissors") == "You win! rock beat scissors") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("rock", "rock") == "Draw") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("scissors", "rock") == "You lose! rock beat scissors") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("scissors", "paper") == "You win! scissors beat paper") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }

//   if (playRound("scissors", "scissors") == "Draw") {
//     console.log("test ok");
//   } else {
//     console.log("test ko");
//   }
// }

// testPlayRound();
