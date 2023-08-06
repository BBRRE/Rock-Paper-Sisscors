

function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr.at(Math.floor(Math.random() * 3))
}

function up(name){
return name.charAt(0).toUpperCase() + name.slice(1)
}

 let w = 0
 let l = 0
 let d = 0

for (i = 1; i < 6; i++){
    let answer = prompt("Rock Paper or Scissors").toLowerCase()

    function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        d += 1
        console.log("Draw!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "rock"  ){
        w += 1
        console.log("You win! " + up(playerSelection) + " beats " + up(computerSelection))
    }
    else{
        l += 1
        console.log("You loose! " + up(computerSelection) + " beats " + up(playerSelection))
    }
}

let comp = getComputerChoice()
console.log("Round: " + i)
console.log("Your answer: " + up(answer))
console.log("Computer answer: " + up(comp))
console.log(playRound(answer,comp))

}

console.log("results: ")
console.log("Player Wins: " + w)
console.log("Computer Wins: " + l)
console.log("Draws: " + d)