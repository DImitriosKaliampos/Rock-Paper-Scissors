function getComputerChoice() {
    let pcChoice = Math.floor((Math.random() * 3) + 1);
    console.log(pcChoice);
    if (pcChoice == 1) {
        return "Rock";
    } 
    else if (pcChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

