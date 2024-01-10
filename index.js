const choises = ["Rock", "Paper", "Scissors"];

function getComputerChoise() {
  return choises[Math.floor(Math.random() * choises.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beat Scissors";
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lose! Paper beat Rock";
    } else {
        return "Draw!";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoise();
console.log("His choise is: " + computerSelection);
console.log("My choise is: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
