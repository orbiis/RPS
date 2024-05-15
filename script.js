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

function valueCompare() {
    if (getHumanChoice === "rock" && getComputerChoice === "rock") {
        return "It's a draw.";
    } else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
        return "It's a draw.";
    } else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
        return "It's a draw.";
    } else if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        return "You win!";
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        return "You win!";
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        return "You win!";
    } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        return "You lose! :(";
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        return "You lose! :(";
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        return "You lose! :(";
    } else {
        return "Unsupported value";
    } 
}

console.log(valueCompare())