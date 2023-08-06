let answer = prompt("Rock Paper or Scissors").toLowerCase()

function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr.at(Math.floor(Math.random() * 3))
}
 
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        console.log("Draw!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "rock"  ){
        console.log("You win! " + playerSelection + " beats " + computerSelection)
    }
    else{
        console.log("You loose! " + computerSelection + " beats " + playerSelection)
    }
}
let comp = getComputerChoice()

console.log("Your answer " + answer)
console.log("Computer answer " + comp)
console.log(playRound(answer,comp))