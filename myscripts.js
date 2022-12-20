function getComputerChoice() {
    let pcChoice = Math.floor((Math.random() * 3) + 1);
    // console.log(pcChoice);
    if (pcChoice == 1) {
        return "rock";
    } 
    else if (pcChoice === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getPlayerChoice() {
   let move = prompt("What move would you like to make?");
   move = move.toLowerCase();
   console.log(move);
   return move;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;

function playRound( playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    // let playerWins = 0;
    // let computerWins = 0;
    if (computerSelection === playerSelection) {
        return "It's a tie! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    } 
    else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        playerWins++;
        return "You Win! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    } 
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        computerWins++;
        return "You Lose! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if ((computerSelection === "scissor") && (playerSelection === "paper")) {
        computerWins++;
        return "You Lose! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if ((computerSelection === "scissor") && (playerSelection === "rock")) {
        playerWins++;
        return "You Win! Rock beats Scissor!  \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if ((computerSelection === "rock") && (playerSelection === "scissor")) {
        computerWins++;
        return "You Lose! Rock beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissor")) {
        playerWins++;
        return "You Win! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
}



function game() {
        console.log(playRound(playerSelection, computerSelection))
}

for ( let i = 0; i < 5; i++ ) {
    game();
}

