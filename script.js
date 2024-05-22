// getComputerChoice

// math random returns three values
// link num values to string values
// test with console.log

let randomValue = Math.random();
let getComputerChoice

if (randomValue < 0.33) {
    getComputerChoice = "rock";
} else if (randomValue > 0.66) {
    getComputerChoice = "scissors"
} else {
    getComputerChoice = "paper"
}

console.log(getComputerChoice)

// prompt user to choose string value
// store string value
// compare human string value to computer string value

let getHumanChoice = prompt("Choose ROCK, PAPER or SCISSORS!").toLowerCase();
console.log(getHumanChoice);

function playRound() {

    let humanScore = 0;
    let computerScore = 0;

    function valueCompare() {
        if (getHumanChoice === "rock" && getComputerChoice === "rock") {
            return "It's a draw.";
        } else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
            return "It's a draw.";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
            return "It's a draw.";
        } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
            ++humanScore;
            return "You win!";
        } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
            ++humanScore;
            return "You win!";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
            ++humanScore;
            return "You win!";
        } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
            ++computerScore;
            return "You lose! :(";
        } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
            ++computerScore;
            return "You lose! :(";
        } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
            ++computerScore;
            return "You lose! :(";
        } else {
            return "Unsupported value";
        } 
    }

    console.log(valueCompare())

    console.log(humanScore);
    console.log(computerScore);
}

playRound();

// Declare humanScore
// Declare computerScore
// Initialize with 0





// Single round logic
// create function playRound
// define parameters humanChoice and computerChoice and use as arguments

//  play game
//      play round x 5
//          