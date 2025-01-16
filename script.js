const btnEl = document.querySelector('.button');
console.log (btnEl);
const optionEl = document.querySelector('.player')
const computerBot = document.querySelector('.bot');
const rock = document.querySelector('.rock');
console.log(rock);
const paper = document.querySelector('.paper');
console.log(paper);
const scissor = document.querySelector('.scissor');
 // console.log(btnEle);
// console.log(btnEle.innerText);

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

function optionDisplayRock(){
    const rockImage = "images/" + 3 + ".jpg";
    optionEl.setAttribute('src' ,rockImage );
}
function optionDisplayPaper(){
    const paperImage = "images/" + 2 + ".jpg";
    optionEl.setAttribute('src' ,paperImage );
}
function optionDisplayScissor(){
    const scissorImage = "images/" + 1 + ".jpg";
    optionEl.setAttribute('src' ,scissorImage );
}
 // need to set class atrribut on clicking a perticular element
// btnEle.onclick() = playButton;
btnEl.addEventListener('click', playButton);
// btnEle.onclick = playButton;
rock.addEventListener('click',optionDisplayRock );

paper.addEventListener('click', optionDisplayPaper);
 
scissor.addEventListener('click', optionDisplayScissor);