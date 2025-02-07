const btnEl = document.querySelector('.button');
const optionEl = document.querySelector('.player')
const computerBot = document.querySelector('.bot');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const boardEl = document.querySelector('#notice')
 // console.log(btnEle);
// console.log(btnEle.innerText);


function generateComputerChoice() {
    const random = Math.random() * (4 - 1) + 1;
    const round = Math.floor(random);
    return round;
}

/*
1-> scissor
2-> Paper
3-> rock

-> 'draw', 'computer', 'user'
*/
function calculateWinner(compChoice, userChoice) {

    if(compChoice == userChoice) return 'draw';

    switch(compChoice) {
        case 1:
            
            if(userChoice == 2) return 'computer'
            else return 'user'

        case 2:
            return userChoice == 1 ? 'user' : 'computer'

        case 3:
            return userChoice == 1 ? 'computer' : 'user'
    }
}



function playGame(userChoice) {
    // user choice: rock
    const image = "images/" + userChoice + ".jpg";
    console.log("setting imager to " + image);
    optionEl.setAttribute('src' ,image );
    
    // computer choice: 
    const computerChoice = generateComputerChoice();
    const choiceImage = "images/" + computerChoice + ".jpg";
    computerBot.setAttribute('src', choiceImage);

    const winner = calculateWinner(computerChoice, userChoice);
    console.log("winner: " + winner)
    let message;
    if(winner == 'draw') message = "It's a draw :(";
    else message = (winner == 'user' ? "You" : "Bot") +  " Won"

    boardEl.textContent = message;
}


function optionDisplayRock(){
    playGame(3);
}

function optionDisplayPaper(){
    playGame(2);
}

function optionDisplayScissor(){
    playGame(1);
}

function playButton(){
   
    const random = Math.random() * (4 - 1) + 1;
    const round = Math.floor(random);
    const img = "images/" + round + ".jpg";

    optionEl.setAttribute('src',img)
    console.log(optionEl.innerText);

    const randomNum  = Math.random() * (4 - 1) + 1;
    const roundNum = Math.floor(randomNum);
    const imageForComptuter = "images/" + roundNum + ".jpg";
    computerBot.setAttribute('src',imageForComptuter )

}


 // need to set class atrribut on clicking a perticular element
// btnEle.onclick() = playButton;
btnEl.addEventListener('click', playButton);
// btnEle.onclick = playButton;
rock.addEventListener('click',optionDisplayRock );

paper.addEventListener('click', optionDisplayPaper);
 
scissor.addEventListener('click', optionDisplayScissor);