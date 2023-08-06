
function getComputerChoice(){
    arr = ["rock","paper","scissors"]
    return arr.at(Math.floor(Math.random() * 3))
}

function up(name){
return name.charAt(0).toUpperCase() + name.slice(1)
}

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        d += 1
        result.innerHTML = "Result: " +  "Draw!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "rock"  ){
        w += 1
        result.innerHTML = "Result: " +  "You win! " + playerSelection + " beats " + computerSelection
    }
    else{
        l += 1
        result.innerHTML = "Result: " + "You loose! " + computerSelection + " beats " + playerSelection
    }
    document.querySelector(".draw").innerHTML = "Draw: " + d;
    document.querySelector(".player").innerHTML = "Player: " + w;
    document.querySelector(".computer").innerHTML = "Computer: " + l;
    document.querySelector(".round").innerHTML = "Round: " + ( d + w + l );
}
const result = document.querySelector(".result")


const buttons = document.querySelectorAll("button")
let player;
let w = 0
let d = 0
let l = 0
buttons.forEach((button) =>{
    button.addEventListener("click", () => {
    playRound(button.id,getComputerChoice())
    })
})

console.log(player)