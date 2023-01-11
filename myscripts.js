function getComputerChoice() {
    let pcChoice = Math.floor((Math.random() * 3) + 1);
    if (pcChoice == 1) {
        let pcMove = "Rock";
        return pcMove;
    } 
    else if (pcChoice === 2) {
        let pcMove = "Paper";
        return pcMove;
    }
    else if (pcChoice === 3) {
        let pcMove = "Scissors";
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
        return "It's a tie!";
    } 
    else if (pcMove === "Rock" && move === "Paper") {
        return "You Win! Paper beats Rock";
    }
    else if (pcMove === "Rock" && move === "Scissors") {
        // computerWins++;
        return "You Lose! Rock beats Paper!";
    }
    else if (pcMove === "Paper" && move === "Rock") {
        // computerWins++;
        return "You Lose! Paper beats Rock!";
    }
    else if (pcMove === "Scissors" && move === "Paper") {
        // computerWins++;
        return "You Lose! Scissor beats Paper!";
    }
    else if (pcMove === "Scissors" && move === "Rock") {
        // playerWins++;
        return "You Win! Rock beats Scissor!";
    }
    else if (pcMove === "Paper" && move === "Scissors") {
        // playerWins++;
        return "You Win! Scissor beats Paper!";
    }
    else {
        return "Not a valid move :) ";
    }
}

function game() {
    playRound(getPlayerChoice(), getComputerChoice());
}

let playerWins = 0;
let computerWins = 0;

//Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

document.getElementById("rock").addEventListener("click", function() {
    let pcMove = getComputerChoice();
    document.getElementById("computerChoice").innerHTML = pcMove;
    document.getElementById("resultOfRound").innerHTML = playRound("Rock", pcMove);
    document.getElementById("score").innerHTML = scores("Rock", pcMove);
});

document.getElementById("paper").addEventListener("click", function() {
    let pcMove = getComputerChoice();
    document.getElementById("computerChoice").innerHTML = pcMove;
    document.getElementById("resultOfRound").innerHTML = playRound("Paper", pcMove);
    document.getElementById("score").innerHTML = scores("Paper", pcMove);    
}); 

document.getElementById("scissors").addEventListener("click", function() {
    let pcMove = getComputerChoice();
    document.getElementById("computerChoice").innerHTML = pcMove;
    document.getElementById("resultOfRound").innerHTML = playRound("Scissors", pcMove);
    document.getElementById("score").innerHTML = scores("Scissors", pcMove); 
});

function scores(playerSelection, computerSelection) {
    let pcMove = computerSelection;
    let move = playerSelection;
    if (pcMove === move) {
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    } 
    else if (pcMove === "Rock" && move === "Paper") {
        playerWins++;
        if ( playerWins === 5) {
            document.getElementsById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "Congratulations you won!"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "Rock" && move === "Scissors") {
        computerWins++;
        if ( computerWins === 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "The computer won! You'll get them next time :)"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "Paper" && move === "Rock") {
        computerWins++;
        if ( computerWins === 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "The computer won! You'll get them next time :)"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "Scissors" && move === "Paper") {
        computerWins++;
        if ( computerWins === 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "The computer won! You'll get them next time :)"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "Scissors" && move === "Rock") {
        playerWins++;
        if ( playerWins === 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "Congratulations you won!"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else if (pcMove === "Paper" && move === "Scissors") {
        playerWins++;
        if ( playerWins === 5) {
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            return "Congratulations you won!"
        }
        return "Player wins: " + playerWins + "\nComputer Wins: " + computerWins;
    }
    else {
        console.log("ERROR")
        return "Not a valid move :) ";
    }
}






