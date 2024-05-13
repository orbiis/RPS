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

console.log(getComputerChoice);

// getHumanChoice

// prompt user to choose string value
// store string value
// compare human string value to computer string value


