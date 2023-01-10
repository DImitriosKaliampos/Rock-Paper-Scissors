function getComputerChoice() {
    let pcChoice = Math.floor((Math.random() * 3) + 1);
    
    if (pcChoice == 1) {
        console.log("pc choice is " + pcChoice);
        return "rock";
    } 
    else if (pcChoice === 2) {
        console.log("pc choice is " + pcChoice);
        return "paper";
    }
    else if (pcChoice === 3) {
        console.log("pc choice is " + pcChoice);
        return "scissor";
    }
}

function getPlayerChoice() {
    let move = prompt("What move would you like to make?");
    move = move.toLowerCase();
    console.log("player move is " + move);
    return move;
 }

let playerWins = 0;
let computerWins = 0;


function playRound() {
    let computerMove = getComputerChoice();
    let playerMove = getPlayerChoice();
    if (computerMove === playerMove) {
        return "It's a tie! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    } 
    else if (computerMove === "rock" &&playerMove === "paper") {
        playerWins++;
        return "You Win! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (computerMove === "rock" && playerMove === "scissor") {
        computerWins++;
        return "You Lose! Rock beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (computerMove === "paper" && playerMove === "rock") {
        computerWins++;
        return "You Lose! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (computerMove === "scissor" && playerMove === "paper") {
        computerWins++;
        return "You Lose! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (computerMove === "scissor" && playerMove === "rock") {
        playerWins++;
        return "You Win! Rock beats Scissor!  \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (computerMove === "paper" && playerMove === "scissor") {
        playerWins++;
        return "You Win! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else {
        return "Not a valid move :) ";
    }
}



function game() {
        console.log(playRound());
}

for ( let i = 0; i < 5; i++ ) {
    game();
}

