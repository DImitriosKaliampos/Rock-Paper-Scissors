function getComputerChoice() {
    let pcChoice = Math.floor((Math.random() * 3) + 1);
    if (pcChoice == 1) {
        let pcMove = "rock";
        return pcMove;
    } 
    else if (pcChoice === 2) {
        let pcMove = "paper";
        return pcMove;
    }
    else if (pcChoice === 3) {
        let pcMove = "scissor";
        return pcMove;
    }
    
}

function getPlayerChoice() {
    let move = prompt("What move would you like to make?");
    move = move.toLowerCase();
    return move;
}


function playRound(playerSelection, computerSelection) {
    let pcMove = computerSelection;
    let move = playerSelection;
    if (pcMove === move) {
    return "It's a tie! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    } 
    else if (pcMove === "rock" && move === "paper") {
        playerWins++;
        return "You Win! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "rock" && move === "scissor") {
        computerWins++;
        return "You Lose! Rock beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "paper" && move === "rock") {
        computerWins++;
        return "You Lose! Paper beats Rock! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "scissor" && move === "paper") {
        computerWins++;
        return "You Lose! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "scissor" && move === "rock") {
        playerWins++;
        return "You Win! Rock beats Scissor!  \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "paper" && move === "scissor") {
        playerWins++;
        return "You Win! Scissor beats Paper! \nPlayer wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else {
        return "Not a valid move :) ";
    
    }
}

function game() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
}

let playerWins = 0;
let computerWins = 0;

// game();

const body = document.body;

document.getElementById("rock").addEventListener("click", function() {
    console.log(playRound("rock", getComputerChoice()));
});

document.getElementById("paper").addEventListener("click", function() {
    console.log(playRound("paper", getComputerChoice()));
});

document.getElementById("scissors").addEventListener("click", function() {
    console.log(playRound("scissor", getComputerChoice()));
});