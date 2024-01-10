const choises = ['Rock', 'Paper', 'Scissors',];

function getComputerChoise() {
  return choises[Math.floor(Math.random() * choises.length)];
}

function playRound(playerSelection, computerSelection) {
        
}

const playerSelection = 'rock';
const computerSelection = getComputerChoise();
console.log(playRound(playerSelection, computerSelection));