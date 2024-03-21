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

function playGame(){
    for(let i = 0; i<5; i++){
        const playerChoice = getInput();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        console.log(`Player: ${playerTally} | Computer: ${computerTally} `);
    }
}

playGame();