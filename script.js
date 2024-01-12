const choises = ["Rock", "Paper", "Scissors"];

//ricontrollare se funzione random è scritta correttamente
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
  //inizialmente l'if del pareggio l'ho scritto senza la funzione equals e funzionava male
  if (equals(playerSelection, computerSelection)) {
    return "Draw";
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "rock")) {
    return "You win! " + playerSelection + " beat " + computerSelection;
  }

  if (equals(playerSelection, "rock") && equals(computerSelection, "scissors")) {
    return "You win! " + playerSelection + " beat " + computerSelection;
  }

  if (equals(playerSelection, "scissors") && equals(computerSelection, "paper")) {
    return "You win! " + playerSelection + " beat " + computerSelection;
  }

  if (equals(playerSelection, "paper") && equals(computerSelection, "scissors")) {
    return "You lose! " + computerSelection + " beat " + playerSelection;
  }

  if (equals(playerSelection, "rock") && equals(computerSelection, "paper")) {
      return "You lose! " + computerSelection + " beat " + playerSelection;
    }

  if (equals(playerSelection, "scissors") && equals(computerSelection, "rock")) {
    return "You lose! " + computerSelection + " beat " + playerSelection;
  } 
}

function equals(a, b) {
  return a.toLowerCase() == b.toLowerCase();
}

game();
