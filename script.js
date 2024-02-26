let playerText = document.getElementById('player_text'); 
let restartBTN = document.getElementById('restart_btn');
let boxes = Array.from(document.getElementsByClassName('box'));

console.log(boxes); // need to convert into  an array 

const O_text = 'O';
const X__text = 'X'; 

let currentPlayer = X__text; 
let spaces = Array(9).fill(null);
console.log(spaces);


const startGame = () => boxes.forEach(box => box.addEventListener('click', boxClick));

function boxClick(e){
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id]= currentPlayer;
        e.target.innerText = currentPlayer; 
        currentPlayer = currentPlayer == X__text ? O_text : X__text;
    }
}
startGame(); 

