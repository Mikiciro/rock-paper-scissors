const choises = ["Rock", "Paper", "Scissors"];

function getComputerChoise() {
  return choises[Math.floor(Math.random() * choises.length)];
}
//modificare con un loop?
function game() {
  var michele = 0;
  var computer = 0;
  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele++;
  } else if (result.includes("lose")) {
    computer++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele++;
  } else if (result.includes("lose")) {
    computer++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele++;
  } else if (result.includes("lose")) {
    computer++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele++;
  } else if (result.includes("lose")) {
    computer++;
  }
  console.log(result);

  var result = playRound(prompt(), getComputerChoise());

  if (result.includes("win")) {
    michele++;
  } else if (result.includes("lose")) {
    computer++;
  }
  console.log(result);

  //sostituiti i console log con alert in modo che compaia a schermo chi vince
  if (michele > computer) {
    alert("Greatings! You win!");
  } else if (michele == computer) {
    alert("It's a Draw! Another game?");
  } else {
    alert("Sorry! You lose!");
  }
}
//migliorare algoritmo vittorie
//accorpare if vittorie e if sconfitte

function playRound(playerSelection, computerSelection) {
  if (equals(playerSelection, computerSelection)) {
    return "Draw";
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "rock") || 
    (equals(playerSelection, "rock") && equals(computerSelection, "scissors")) ||
    (equals(playerSelection, "scissors") && equals(computerSelection, "paper"))    
    ) {
    return "You win! " + playerSelection + " beat " + computerSelection;
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "scissors") ||
    (equals(playerSelection, "rock") && equals(computerSelection, "paper")) ||
    (equals(playerSelection, "scissors") && equals(computerSelection, "rock"))  
  ) {
    return "You lose! " + computerSelection + " beat " + playerSelection;
  } 
}

function equals(a, b) {
  return a.toLowerCase() == b.toLowerCase();
}

function testPlayRound() {

  if (playRound("paper", "scissors") == "You lose! scissors beat paper") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("paper", "rock") == "You win! paper beat rock") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("paper", "paper") == "Draw") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("rock", "paper") == "You lose! paper beat rock") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("rock", "scissors") == "You win! rock beat scissors") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("rock", "rock") == "Draw") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("scissors", "rock") == "You lose! rock beat scissors") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("scissors", "paper") == "You win! scissors beat paper") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }

  if (playRound("scissors", "scissors") == "Draw") {
    console.log("test ok");
  } else {
    console.log("test ko");
  }  
  
}

// game();
testPlayRound();