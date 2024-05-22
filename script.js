// getComputerChoice
    // math random returns three values
    // link num  range to string values
// getHumanChoice
    // prompt user to choose string value
    // store string value
// valueCompare
    // conditional compare getComputerChoice to getHumanChoice
    // create relevant returns
//playRound
    // combine above
// playGame
    // loop playRound until combined score 5
    // return win/lose message


let humanScore = 0;
let computerScore = 0;

function playRound() {

    let randomValue = Math.random();
    let getComputerChoice

    if (randomValue < 0.33) {
        getComputerChoice = "rock";
    } else if (randomValue > 0.66) {
        getComputerChoice = "scissors"
    } else {
        getComputerChoice = "paper"
    }

    let getHumanChoice = prompt("Choose ROCK, PAPER or SCISSORS!").toLowerCase();

    function valueCompare() {
        if (getHumanChoice === "rock" && getComputerChoice === "rock") {
            return "It's a draw.";
        } else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
            return "It's a draw.";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
            return "It's a draw.";
        } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
            ++humanScore;
            return "You win! Rock beats Scissors.";
        } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
            ++humanScore;
            return "You win! Paper beats Rock.";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
            ++humanScore;
            return "You win! Scissors beat paper.";
        } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
            ++computerScore;
            return "You lose! Paper beats Rock.";
        } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
            ++computerScore;
            return "You lose! Scissors beat paper.";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
            ++computerScore;
            return "You lose! Rock beats Scissors.";
        } else {
            return "Unsupported value";
        } 
    }

    console.log(valueCompare())

    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}

function playGame() {
    
    while (humanScore + computerScore < 5) {
        playRound();
    }
    if (humanScore > computerScore) {
        return "You have won the game!"
    }else {
        return "You have lost the game!"
    }
}

playGame();