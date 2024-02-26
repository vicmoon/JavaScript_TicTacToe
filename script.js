let playerText = document.getElementById('player_text'); 
let restartBTN = document.getElementById('restart_btn');
let boxes = Array.from(document.getElementsByClassName('box'));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks'); 
let currentPlayer = X__text; 
let spaces = Array(9).fill(null);

// console.log(boxes); // need to convert into  an array 

const O_text = 'O';
const X__text = 'X'; 
const startGame = () => boxes.forEach(box => box.addEventListener('click', boxClick));



function boxClick(e){
    const id = e.target.id;
    if(!spaces[id]){

        spaces[id]= currentPlayer;
        e.target.innerText = currentPlayer; 

        if(playerWon()  !==false ){
            playerText = `${currentPlayer} has won`;
            let winningBlocks = playerWon();
            winningBlocks.map(box => boxes[box].style.backgroundColor = winnerIndicator); 

        };
        currentPlayer = currentPlayer == X__text ? O_text : X__text;
    }
};


const winningRules = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function playerWon(){
    for(const move of winningRules){
        let [a,b,c] = move; // destructuring 
        if(spaces[a]&& (spaces[a] == spaces[b] && spaces[a]== spaces[c])) 
        return [a,b,c]
    }
   return false;
}; 

restartBTN.addEventListener('click', restartGame); 

function restartGame (){
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}; 

startGame(); 

