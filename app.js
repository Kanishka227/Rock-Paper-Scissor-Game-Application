const computerChoiceDisplay = document.getElementById('Computer-choice')
const userChoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
 const randomNumber = Math.floor(Math.random()*3)+1

 if(randomNumber === 1){
    computerChoice = 'rock'
 }
 if(randomNumber === 2){
    computerChoice = 'paper'
 }
 if(randomNumber === 3){
    computerChoice = 'scissors'
 }
 computerChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if(computerChoice == userChoice){
        result = "Its a draw !"
    }
    if(computerChoice == 'rock' && userChoice == 'paper'){
        result = "You won !"
    }
    if(computerChoice == 'rock' && userChoice == 'scissors'){
        result = "You lost !"
    }
    if(computerChoice == 'paper' && userChoice == 'scissors'){
        result = "You win !"
    }
    if(computerChoice == 'paper' && userChoice == 'rock'){
        result = "You lost !"
    }if(computerChoice == 'scissors' && userChoice == 'rock'){
        result = "You win !"
    }
    if(computerChoice == 'scissors' && userChoice == 'paper'){
        result = "You lost !"
    }
    resultDisplay.innerHTML = result
}