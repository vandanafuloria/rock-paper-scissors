const btnEle = document.querySelector('button');
const optionEl= document.querySelector('.options')
// console.log(btnEle);
// console.log(btnEle.innerText);

function playButton(){
    console.log(btnEle.innerText);
    const random = Math.random() * (4 - 1) + 1;
    // console.log("hello", random)
    const round = Math.floor(random);
    // console.log(rock);
    // console.log(rock.innerText);
    // console.log(rock.innerText="hello");
   const img = "images/" + round + ".jpg";
   console.log(img);
    optionEl.setAttribute('src',img)
    console.log(optionEl.innerText);

    
    // console.log(random, round);
    
}
 
// btnEle.onclick() = playButton;
btnEle.addEventListener('click', playButton);
// btnEle.onclick = playButton;