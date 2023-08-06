let answer = prompt("Rock Paper or Scissors").toLowerCase

function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr.at(Math.floor(Math.random() * 3))
}
 
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        console.log("Draw")
    }
    else {
        console.log("idk")
    }
}

console.log(playRound(answer,"paper"))