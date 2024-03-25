let playerTally = 0;
let computerTally = 0; 
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getInput(){
    const playerSelection = prompt("Enter your choice!");
    const playerChoice = playerSelection.toLowerCase();
    return playerChoice; 
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return "It's a tie!";
    }else if(!(choices.includes(playerChoice))){
        return "Input not valid!";
    }else if((playerChoice === "rock" && computerChoice === "scissors") || 
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")){
                playerTally += 1; 
                return `You Win! ${playerChoice} beats ${computerChoice}.`;
    }else{
        computerTally += 1; 
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}


const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent;
        const computerChoice = getComputerChoice();
        const winnerText = document.createElement("div");
        const result = playRound(playerChoice, computerChoice);
        winnerText.textContent = result;
        container.appendChild(winnerText);
        if(computerTally === 5){
            winnerText.textContent = "Computer Wins!."
        }else if(playerTally === 5){
            winnerText.textContent = "Player Wins!."
        }
        container.appendChild(winnerText);
    })
});