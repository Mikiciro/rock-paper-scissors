const choises = ["Rock", "Paper", "Scissors"];

function getComputerChoise() {
  return choises[Math.floor(Math.random() * choises.length)];
}
//modificare con un loop
function game(){
  var michele = 0;
  var computer = 0;
  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele ++;
  } else if (result.includes("lose")){
    computer ++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele ++;
  } else if (result.includes("lose")){
    computer ++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele ++;
  } else if (result.includes("lose")){
    computer ++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele ++;
  } else if (result.includes("lose")){
    computer ++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele ++;
  } else if (result.includes("lose")){
    computer ++;
  }
  console.log(result);

  if (michele > computer) {
    console.log("ha vinto michele");
  } else if (michele == computer){
    console.log("pareggio");
  } else {
    console.log("ha vinto il pc");
  }
}
//migliorare algoritmo vittorie
//quanto è la stessa giocata è sempre un pareggio
function playRound(playerSelection, computerSelection) {
  if (equals(playerSelection, "paper") && equals(computerSelection, "rock")) {
    return "You win! " + playerSelection + " beat " + computerSelection ;
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "paper")) {
    return "Draw!";
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "scissors")) {
    return "You lose! " + computerSelection + " beat " + playerSelection ;
  }

  if (equals(playerSelection, "rock") && equals(computerSelection, "scissors")) {
    return "You win! " + playerSelection + " beat " + computerSelection ;
  }

  if (equals(playerSelection, "rock") && equals(computerSelection, "rock")) {
    return "Draw!";
  }

  if (equals(playerSelection, "rock") && equals(computerSelection, "paper")) {
    return "You lose! " + computerSelection + " beat " + playerSelection ;
  }

  if (equals(playerSelection, "scissors") && equals(computerSelection, "paper")) {
    return "You win! " + playerSelection + " beat " + computerSelection ;
  }

  if (equals(playerSelection, "scissors") && equals(computerSelection, "scissors")) {
    return "Draw!";
  }

  if (equals(playerSelection, "scissors") && equals(computerSelection, "rock")) {
    return "You lose! " + computerSelection + " beat " + playerSelection ;
  }
}

function equals(a, b) {
  return a.toLowerCase() == b.toLowerCase();
}

game();
